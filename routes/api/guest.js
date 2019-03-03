const router = require('express').Router();
const siteObj = require('../../controllers/siteObj');
const guestController = require('../../controllers/guestController');
const pageController = require('../../controllers/pageController');
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
        let shows = siteObj.getShows();
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
    .route('/reservations')
    .get(isAuthenticated, (req, res) => {
        if (!siteObj.shows.length) {
            res.status(500).send('Server failed to load shows');
            return;
        }
        db.User
            .findById(req.user._id)
            .populate('reservations')
            .then(dbUser => {
                if (!dbUser) {
                    res.status(500).send('User not found');
                    return;
                }
                return db.Reservation
                            .find({ _id: { $in: dbUser.reservations } })
                            .populate('seats');
            })
            .then(dbReservations => {
                res.json(dbReservations);
            })
    })

module.exports = router;
