const db = require('../models');
const bcrypt = require('bcrypt');
const reservationController = require('./reservationController');

module.exports = {
    addReservation: function(userId, resId) {
        return db.User.findByIdAndUpdate(userId, { $addToSet: { reservations: resId } });
    },

    changePassword: function(userId) {
        return db.User.findById(userId)
    },

    create: function(name, password, email) {
        return db.User.create({ name, password, email });
    },

    delete: function(userId) {
        return db.User.findByIdAndRemove(userId);
    },

    removeReservation: function(userId, resId) {
        return db.User.findByIdAndUpdate(userId, { $pull: { reservations: resId } });
    }
    
}