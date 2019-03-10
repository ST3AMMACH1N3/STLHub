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
    .post(adminController.createShow)
    .put(adminController.editShow)
    .delete(adminController.deleteShow)
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
                siteObj[contentType.toLowerCase()].push(content);
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
            .findByIdAndUpdate(req.body.content._id, req.body.content)
            .then(response => {
                let path = contentType.toLowerCase();
                let contentIndex = siteObj[path].findIndex(item => item._id == req.body.content._id);
                if (contentIndex === -1) {
                    res.send('Content not found to edit');
                    console.log('Content not found to edit');
                    return;
                }

                console.log(response);
            })
    })
    .delete((req, res) => {

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