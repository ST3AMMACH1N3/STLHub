const router = require('express').Router();
const siteObj = require('../../controllers/siteObj');
const guestController = require('../../controllers/guestController');
const pageController = require('../../controllers/pageController');
const seatController = require('../../controllers/seatController');
const passport = require('../../config/passport');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

router
    .route('/content')
    .get((req, res) => {
        let content = siteObj.getMain();
        if (!content.announcements.length && !content.camps.length && !content.shows.length && !content.survivors.length) {
            res.status(500).send('Server failed to load content');
            return;
        }
        res.json(content);
    });

router
    .route('/shows')
    .get((req, res) => {
        let shows = req.user ? siteObj.shows : siteObj.getShows();
        if (!shows.length) {
            res.status(500).send('Server failed to load shows');
            return;
        }
        res.json(shows);
    });

router
    .route('/createAccount')
    .post((req, res) => {
        db.User
            .findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    console.log('User not created');
                    res.send('User with email already exists.');
                    return;
                }
                return db.User.create(req.body);
            })
            .then(dbUser => res.json(dbUser));
    })

router
    .route('/login')
    .post(passport.authenticate('local'), (req, res) => {
        db.User
            .findOne({ email: req.body.email })
            .then(data => res.end())
            .catch(err => res.json(err));
    })

router
    .route('/logout')
    .post(isAuthenticated, (req, res) => {
        req.logout();
        res.end();
    })

router
    .route('/getCredentials')
    .get(isAuthenticated, (req, res) => {
        const { _id, admin, name } = req.user;
        res.json({ _id, admin, name });
    })

router
    .route('/reservation')
    .get(isAuthenticated, (req, res) => {
        if (!siteObj.shows.length) {
            res.status(500).send('Server failed to load shows');
            return;
        }
        db.User
            .findById(req.user._id)
            .then(dbUser => {
                if (!dbUser) {
                    res.status(500).send('User not found');
                    return;
                }
                return db.Reservation
                            .find({ _id: { $in: dbUser.reservations } });
            })
            .then(dbReservations => {
                res.json(dbReservations);
            })
            .catch(err => res.json(err));
    })
    .post(isAuthenticated, (req, res) => {
        if (!siteObj.shows.length) {
            res.status(500).send('Server failed to load shows');
            return;
        }
        db.Reservation
            .create({
                show: req.body.show,
                holder: req.user._id,
                seats: req.body.seats
            })
            .then(reservation => {
                db.Show
                    .findByIdAndUpdate(req.body.show, { $addToSet: { reservations: reservation._id } })
                    .then(dbShow => {
                        console.log('Reservation added');
                        siteObj.loadShow(dbShow._id);
                        siteObj.reservation(reservation._id);
                    })
                    .catch(err => console.log(err));
                db.User
                    .findByIdAndUpdate(req.user._id, { $addToSet: { reservations: reservation._id } })
                    .then(dbUser => console.log('Reservation added to user'))
                    .catch(err => console.log(err));
                seatController.changeStatus(req.body.seats, 'reserved');
                res.json(reservation);
            })
            .catch(err => res.json(err));
    })
    .put(isAuthenticated, (req, res) => {
        if (!siteObj.shows.length) {
            res.status(500).send('Server failed to load shows');
            return;
        }
        let showIndex = siteObj.shows.findIndex(show => show._id == req.body.show);
        // console.log(req.body.show
        if (showIndex === -1) {
            res.send('Show not found');
            console.log('Show not found');
            return;
        }
        let show = siteObj.shows[showIndex];
        
        let resIndex = show.reservations.findIndex(reservation => reservation._id == req.body.reservation); 
        
        if (resIndex === -1) {
            res.send('Reservation not found');
            console.log('Reservation not found');
            return;
        }
        let reservation = show.reservations[resIndex];
        if (reservation.paid) {
            res.send('Reservation already paid for cannot be modified');
            console.log('Reservation already paid for');
            return;
        }

        let seatsToRemove = [];
        let seatsToAdd = [];
        for(let i = 0; i < show.seats.length; i++) {
            if (req.body.seats.includes(show.seats[i]._id)) {
                let owned = reservation.seats.find(seat => seat._id == show.seats[i]._id);
                console.log(owned);
                if (owned) {
                    seatsToRemove.push(owned._id);
                } else if (!owned && show.seats[i].status !== 'reserved') {
                    seatsToAdd.push(show.seats[i]._id);
                } else if (!owned) {
                    console.log('A seat is taken');
                    res.json('A seat is already taken');
                    return;
                }
            }
        }

        console.log('Seats to remove: ' + seatsToRemove);
        console.log('Seats to add: ' + seatsToAdd);

        db.Seat
            .updateMany({ _id: { $in: seatsToRemove } }, { status: 'open' })
            .then(response => {
                return db.Seat.updateMany({ _id: { $in: seatsToAdd } }, { status: 'reserved' });
            })
            .then(response => {
                return db.Reservation.findByIdAndUpdate(reservation._id, { $addToSet: { seats: { $each: seatsToAdd } } });
            })
            .then(dbReservation => {
                res.json(dbReservation);
                siteObj.loadShow(show._id);
                siteObj.loadReservation(reservation._id);
            })
            .catch(err => res.json(err));

        
    });

module.exports = router;