const showController = require('./showController');
const reservationController = require('./reservationController');
const seatController = require('./seatController');
const contentController = require('./contentController');

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

    createContent: function(req, res) {
        contentController
            .create(req.body.type, req.body)
            .then(content => res.json(content))
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

    deleteContent: function(req, res) {
        contentController
            .delete(req.body.type, req.body.title)
            .then(content => res.json(content))
            .catch(err => res.json(err));
    },

    deleteShow: function(req, res) {
        showController
            .delete(req.body.title, req.body.date)
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    editContent: function(req, res) {
        contentController
            .edit(req.body.type, req.body.title, req.body.key, req.body.value)
            .then(content => res.json(content))
            .catch(err => res.json(err));
    },

    editShow: function(req, res) {
        showController
            .changeProperty(req.body.title, req.body.date, req.body.key, req.body.value)
            .then(show => res.json(show))
            .catch(err => res.json(err));
    },

    findContent: function(req, res) {
        contentController
            .findAll(req.body.type)
            .then(content => res.json(content))
            .catch(err => res.json(err));
    },

    findContentById: function(req, res) {
        contentController
            .findById(req.params.id)
            .then(content => res.json(content))
            .catch(err => res.json(err));
    },

    findSpecificContent: function(req, res) {
        contentController
            .find(req.body.type, req.body.title)
            .then(content => res.json(content))
            .catch(err => res.json(err));
    },

    findSpecificReservation: function(req, res) {
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

    findReservationById: function(req, res) {
        reservationController
            .findById(req.params.id)
            .then(reservation => res.json(reservation))
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

    findShowById: function(req, res) {
        showController
            .findById(req.params.id)
            .populate('reservations')
            .populate('seats')
            .then(show => res.json(show))
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