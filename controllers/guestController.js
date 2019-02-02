const showController = require('./controllers/showController');
const reservationController = require('./controllers/reservationController');
const seatController = require('./controllers/seatController');

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