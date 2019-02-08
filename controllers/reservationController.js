const db = require("../models");
const seatController = require('./seatController');

module.exports = {
    addSeat: function(resId, seatId) {
        return db.Reservation.findByIdAndUpdate(resId, { $addToSet: { seats: seatId } });
    },

    create: function(reservationHolder, seats) {
        return db.Reservation
                    .create({ reservationHolder, seats })
                    .then(reservation => {
                        seatController
                            .changeStatus(seats, 'reserved')
                        return reservation;
                    });
    },

    delete: function(id) {
        return db.Reservation
                    .findByIdAndDelete(id)
                    .then(reservation => {
                        seatController.changeStatus(reservation.seats, 'open');
                        return reservation;
                    });
    },

    findAll: function() {
        return db.Reservation
                    .find()
                    .populate('seats');
    },

    findById: function(id) {
        return db.Reservation
                    .findById(id)
                    .populate('seats');
    },

    payFor: function(id) {
        return db.Reservation.findByIdAndUpdate(id, { paid: true });
    },

    removeSeat: function(resId, seatId) {
        return db.Reservation.findByIdAndUpdate(resId, { $pull: { seats: seatId } });
    }
};