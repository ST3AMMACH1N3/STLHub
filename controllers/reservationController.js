const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Reservation
            .create({ reservationHolder: req.body.lastName })
            .exec()
            .then(data => {
                if (res) {
                    res.json(data);
                }
            })
            .catch(err => {
                if (res) {
                    res.json(err);
                } else {
                    console.log(err);
                }
            })
    },

    deleteById: function(req, res) {
        db.Reservation
            .findByIdAndDelete(req.body.id)
            .then(data => {
                if (res) {
                    res.json(data);
                }
            })
            .catch(err => {
                if (res) {
                    res.json(err);
                } else {
                    console.log(err);
                }
            })
    },

    edit: function(req, res) {

    },

    find: function(req, res) {

    }
}