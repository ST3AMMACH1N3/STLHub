const router = require('express').Router();
const adminController = require('../../controllers/adminController');

router
    .route('/Show')
    .get(adminController.findShows)
    .post(adminController.createShow)
    .put(adminController.editShow)
    .delete(adminController.deleteShow);

router
    .route('/Show/:id')
    .get(adminController.findShowById);

router
    .route('/Content')
    .get(adminController.findContent)
    .post(adminController.createContent)
    .put(adminController.editContent)
    .delete(adminController.deleteContent);

router
    .route('/Content/:id')
    .get(adminController.findContentById);

router
    .route('/Reservation')
    .get(adminController.findReservations)
    .post(adminController.createReservation)
    .put(adminController.payForReservation)
    .delete(adminController.deleteContent);

router
    .route('/Reservation/addSeat')
    .put(adminController.addSeatToReservation);

router
    .route('/Reservation/removeSeat')
    .put(adminController.removeSeatFromReservation);

router
    .route('/Reservation/:id')
    .get(adminController.findReservationById);

module.exports = router;
