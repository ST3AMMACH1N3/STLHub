const db = require("../models");

module.exports = {
    create: function(body) {
        let { title, dates, description, tuition, showDate, ticketPrice, extendedDay, extendedDayPrice } = body;
        return db.Camp.create({ title, dates, description, tuition, showDate, ticketPrice, extendedDay, extendedDayPrice });
    },

    delete: function(title) {
        return db.Camp.findOneAndDelete({ title });
    },

    edit: function(title, key, value) {
        return db.Camp.findOneAndUpdate({ title }, { [key]: value });
    },

    find: function(title) {
        return db.Camp.findOne({ title });
    },

    findAll: function() {
        return db.Camp.find();
    }
};