const db = require("../models");

module.exports = {
    free: function(req, res) {
        this.changeStatus('open', req, res);
    },

    hold: function(req, res) {
        this.changeStatus('held', req, res);
    },

    reserve: function(req, res) {
        this.changeStatus('reserved', req, res);
    },

    changeStatus: function(status, req, res) {
        db.Show
            .find({ title: req.body.title, date: req.body.date })
            .populate('seats')
            .find({ seats: { seatNumber: { $in: req.body.numbers } } })
            .then(seats => {
                let success = seats.find(seat => {
                    return (seat.status === 'reserved' && status === 'reserved');
                });
                if (!success) {
                    if (res) {
                        res.send('One or more seats is already taken.');
                    }
                    console.log('One or more seats is already taken.');
                    return;
                }
                let ids = seats.map(seat => seat._id);
                db.Seat
                    .updateMany({ _id: { $in: ids } }, { status: status })
                    .exec()
                    .then(seats => {
                        if (res) {
                            res.json(seats)
                        }
                    })
                    .catch(err => {
                        if (res) {
                            res.json(err)
                        } else {
                            console.log(err);
                        }
                    });
            })
            .catch(err => {
                if (res) {
                    res.json(err);
                } else {
                    console.log(err);
                }
            })
    }
};
