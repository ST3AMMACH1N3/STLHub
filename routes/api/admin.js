const router = require('express').Router();
const adminController = require('../../controllers/adminController');
const siteObj = require('../../controllers/siteObj');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const isAdmin = require('../../config/middleware/isAdmin');
const db = require('../../models');
const contentTypes = ['Announcement', 'Camp', 'Image', 'Survivor'];

router.use(isAuthenticated);
router.use(isAdmin);

router
    .route('/Show')
    .post((req, res) => {
        let show;
        db.Show
            .create(req.body.content)
            .then(dbShow => {
                show = dbShow;
                let seatArray = [23, 20, 20];
                let seats = [];
                seatArray.forEach((row, index) => {
                    for(let i = 1; i <= row; i++) {
                        seats.push({ seatNumber: `${String.fromCharCode(index + 65)}${i}` });
                    }
                })
                return db.Seat.insertMany(seats);
            })
            .then(seats => {
                let seatIds = seats.map(seat => seat._id);
                return db.Show.findByIdAndUpdate(show._id, { $addToSet: { seats: { $each: seatIds } } })
            })
            .then(dbShow => {
                return db.Show.findById(dbShow._id).populate('reservations').populate('seats');
            })
            .then(dbShow => {
                siteObj.shows.push(dbShow);
                console.log(dbShow);
                res.json(dbShow);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    })
    .put((req, res) => {
        db.Show
            .findByIdAndUpdate(req.body.content._id, req.body.content, { new: true })
            .then(dbShow => {
                return db.Show.findById(req.body.content._id).populate('reservations').populate('seats');
            })
            .then(dbShow => {
                let showIndex = siteObj.shows.findIndex(show => JSON.stringify(show._id) === JSON.stringify(req.body.content._id));
                if (showIndex === -1) {
                   res.send('Show not found to edit');
                   console.log('Show not found to edit');
                   return; 
                }
                siteObj.shows[showIndex] = dbShow;
                res.json(dbShow);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    })
    .delete((req, res) => {
        db.Show
            .findById(req.body._id)
            .then(dbShow => {
                db.Seat
                    .deleteMany({ _id: { $in: dbShow.seats } })
                    .then(response => console.log('Seats for show delete'));
                db.Reservation
                    .deleteMany({ _id: { $in: dbShow.reservations } })
                    .then(response => console.log('Reservations for show deleted'));
                return db.Show.findByIdAndDelete(req.body._id);
            })
            .then(response => {
                let showIndex = siteObj.shows.findIndex(show => JSON.stringify(show._id) === JSON.stringify(req.body._id));
                if (showIndex === -1) {
                    console.log('Show not found to delete');
                    res.send('Show not found to delete');
                    return;
                }

                siteObj.shows.splice(showIndex, 1);
                res.json(response);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })

    })
    .get((req, res) => {
        res.json(siteObj.shows)
    });

router
    .route('/show/:id')
    .get((req, res) => {
        let show = siteObj.shows.find(show => show._id === req.params.id);
        res.json(show);
    });

router
    .route('/content')
    .post((req, res) => {
        let contentType  = req.body.type;
        if (!contentTypes.includes(contentType)) {
            res.status(500).send('Invalid content type');
            console.log('Invalid content type');
            return;
        }

        db[contentType]
            .create(req.body.content)
            .then(dbContent => {
                let path = contentType.toLowerCase() + 's';
                siteObj[path].push(dbContent);
                res.json(dbContent);
            })
            .catch(err => res.json(err));
    })
    .put((req, res) => {
        let contentType  = req.body.type;
        if (!contentTypes.includes(contentType)) {
            res.status(500).send('Invalid content type');
            console.log('Invalid content type');
            return;
        }

        db[contentType]
            .findByIdAndUpdate(req.body.content._id, req.body.content, { new: true })
            .then(dbContent => {
                let path = contentType.toLowerCase() + 's';
                let contentIndex = siteObj[path].findIndex(item => JSON.stringify(item._id) === JSON.stringify(req.body.content._id));
                if (contentIndex === -1) {
                    res.send('Content not found to edit');
                    console.log('Content not found to edit');
                    return;
                }

                siteObj[path][contentIndex] = dbContent;
                res.json(dbContent)
            })
            .catch(err => res.json(err));
    })
    .delete((req, res) => {
        console.log(req.body);
        let contentType  = req.body.type;
        if (!contentTypes.includes(contentType)) {
            res.status(500).send('Invalid content type');
            console.log('Invalid content type');
            return;
        }

        db[contentType]
            .findByIdAndDelete(req.body._id)
            .then(response => {
                let path = contentType.toLowerCase() + 's';
                let contentIndex = siteObj[path].findIndex(item => JSON.stringify(item._id) === JSON.stringify(req.body._id));
                if (contentIndex === -1) {
                    res.send('Content not found to delete');
                    console.log('Content not found to delete');
                    return;
                }

                siteObj[path].splice(contentIndex, 1);

                res.json(response);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })

    })
    .get((req, res) => {
        let content = siteObj.getMain();
        res.json(content);
    });

router
    .route('/content/:id')
    .get((req, res) => {
        let content = siteObj.getMain();
        let item = content[req.body.contentType].find(content => content._id === req.params.id);
        res.json(item);
    });

router
    .route('/reservation')
    .post(adminController.createReservation)
    .put(adminController.payForReservation)
    .delete(adminController.deleteContent)
    .get((req, res) => {
        res.json(siteObj.reservations);
    });

router
    .route('/reservation/addSeat')
    .put(adminController.addSeatToReservation);

router
    .route('/reservation/removeSeat')
    .put(adminController.removeSeatFromReservation);

router
    .route('/reservation/:id')
    .get((req, res) => {
        let reservation = siteObj.reservations.find(reservation => reservation._id === req.params.id);
        res.json(reservation);
    });

module.exports = router;