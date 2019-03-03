const router = require('express').Router();
const adminController = require('../../controllers/adminController');
const siteObj = require('../../controllers/siteObj');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const isAdmin = require('../../config/middleware/isAdmin');

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
    .post(adminController.createContent)
    .put(adminController.editContent)
    .delete(adminController.deleteContent)
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