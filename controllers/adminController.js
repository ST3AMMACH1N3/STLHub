const showController = require('./controllers/showController');
const reservationController = require('./controllers/reservationController');
const seatController = require('./controllers/seatController');
const campController = require('./campController');

module.exports = {
    addSeatToReservation: function(req, res) {
        showController
            .findSeat(req.body.title, req.body.date, req.body.seatNumber)
            .then(seat => {
                if (seat.status !== 'open') {
                    return 'Seat unavailable';
                }
                return showController
                        .findReservation(req.body.title, req.body.date, req.body.name)
                        .then(reservation => {
                            return reservationController.addSeat(reservation._id, seat._id);
                        })
                        .then(reservation => {
                            return seatController.changeStatus(seat._id, 'reserved');
                        })
            })
            .then(seat => res.json(seat))
            .catch(err => res.json(err));
    },

    cancelReservation: function(req, res) {
        showController
            .findReservation(req.body.title, req.body.date, req.body.name)
            .then(reservation => {
                if (reservation.paid) {
                    return 'Reservation already paid for';
                }
                return reservationController.delete(reservation._id);
            })
            .then(reservation => res.json(reservation))
            .catch(err => res.json(err));
    },

    createCamp: function(req, res) {
        campController
            .create(req.body)
            .then(camp => res.json(camp))
            .catch(err => res.json(err));
    },

    createReservation: function(req, res) {
        reservationController
            .create(req.body.name)
            .then(reservation => {
                return showController.addReservation(req.body.title, req.body.date, reservation._id)
            })
            .then(show => {
                return showController
                            .find(show.title, show.date)
                            .populate('reservations')
                            .populate('seats');
            })
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    createShow: function(req, res) {
        showController
            .create(req.body.title, req.body.date, req.body.price)
            .then(show => {
                return showController.addSeats(show.title, show.date);
            })
            .then(show => {
                return showController
                            .find(show.title, show.date)
                            .populate('reservations')
                            .populate('seats');
            })
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    deleteCamp: function(req, res) {
        campController
            .delete(req.body.title)
            .then(camp => res.json(camp))
            .catch(err => res.json(err));
    },

    deleteShow: function(req, res) {
        showController
            .delete(req.body.title, req.body.date)
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    editCamp: function(req, res) {
        campController
            .edit(req.body.title, req.body.key, req.body.value)
            .then(camp => res.json(camp))
            .catch(err => res.json(err));
    },

    editShow: function(req, res) {
        showController
            .changeProperty(req.body.title, req.body.date, req.body.key, req.body.value)
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    findCamps: function(req, res) {
        campController
            .findAll()
            .then(camps => res.json(camps))
            .catch(err => res.json(err));
    },

    findOneCamp: function(req, res) {
        campController
            .find(req.body.title)
            .then(camp => res.json(camp))
            .catch(err => res.json(err));
    },

    findOneReservation: function(req, res) {
        showController
            .findReservation(req.body.title, req.body.date, req.body.name)
            .then(reservation => res.json(reservation))
            .catch(err => res.json(err));
    },

    findReservations: function(req, res) {
        showController
            .find(req.body.title, req.body.date)
            .then(show => {
                return showController.findReservations(show.title, show.date)
            })
            .then(reservations => res.json(reservations))
            .catch(err => res.json(err));
            
    },

    findShows: function(req, res) {
        showController
            .findAll()
            .populate('reservations')
            .populate('seats')
            .then(shows => res.json(shows))
            .catch(err => res.json(err));
    },

    payForReservation: function(req, res) {
        showController
            .findReservation(req.body.title, req.body.date, req.body.name)
            .then(reservation => {
                if (reservation.paid) {
                    return 'Reservation already paid';
                }
                //Do payment stuff
                return reservationController.payFor(reservation._id);
            })
            .then(reservation => res.json(reservation))
            .catch(err => res.json(err));
    },

    removeSeatFromReservation: function(req, res) {
        showController
            .findSeat(req.body.title, req.body.date, req.body.seatNumber)
            .then(seat => {
                return showController
                        .findReservation(req.body.title, req.body.date, req.body.name)
                        .then(reservation => {
                            return reservationController.removeSeat(reservation._id, seat._id);
                        })
                        .then(reservation => {
                            return seatController.changeStatus(seat._id, 'open');
                        })
            })
            .then(seat => res.json(seat))
            .catch(err => res.json(err));
    }
};