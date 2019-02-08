const db = require("../models");
const seatController = require('./seatController');

module.exports = {
    addReservation: function(title, date, resId) {
        return db.Show.findOneAndUpdate({ title, date }, { $addToSet: { reservations: resId } });
    },

    addSeats: function(title, date, seatArray = [23, 20, 20]) {
        return seatController
                    .createMany(seatArray)
                    .then(seats => {
                        let seatIds = seats.map(seat => seat._id);
                        return db.Show.findOneAndUpdate({ title, date }, { $addToSet: { seats: { $each: seatIds } } })
                    })
    },

    changeProperty: function(title, date, key, newValue) {
        return db.Show.findOneAndUpdate({ title, date }, { [key]: newValue });
    },

    create: function(title, date, ticketPrice) {
        return db.Show.create({ title, date, ticketPrice });
    },

    delete: function(title, date) {
        return db.Show.findOneAndDelete({ title, date });
    },

    deleteById: function(id) {
        return db.Show.findByIdAndDelete(id);
    },

    deleteReservation: function(title, date, resId) {
        return db.Show.findOneAndUpdate({ title, date }, { $pull: { reservations: resId } });
    },

    find: function(title, date) {
        return db.Show.findOne({ title, date });
    },

    findAll: function() {
        return db.Show.find();
    },

    findById: function(id) {
        return db.Show.findById(id);
    },

    findReservations: function(title, date) {
        return db.Show
                    .find({ title, date })
                    .then(show => {
                        return db.Reservation
                                    .findOne({ _id: { $in: show.reservations }})
                                    .populate('seats');
                    })
    },

    findReservation: function(title, date, reservationHolder) {
        return db.Show
                    .findOne({ title, date })
                    .then(show => {
                        return db.Reservation
                                    .findOne({ _id: { $in: show.reservations }, reservationHolder: reservationHolder })
                                    .populate('seats');
                    })
    },

    findSeat: function(title, date, seatNumber) {
        return db.Show
                    .findOne({ title, date })
                    .then(show => {
                        return db.Seat.findOne({ _id: { $in: show.seats }, seatNumber: seatNumber })
                    })
    },

    findSeats: function(title, date) {
        return db.Show
                    .findOne({ title, date })
                    .then(show => {
                        return db.Seat.find({ _id: { $in: show.seats } })
                    })
    },

    freeSeats: function(title, date) {
        return db.Show
                    .find({ title, date })
                    .populate('seats')
                    .then(show => {
                        let seats = show.seats.map(seat => seat._id);
                        return seatController.changeStatus(seats, 'open');
                    })
    }
};