const db = require("../models");

module.exports = {
    changeStatus: function(id, status) {
        if (!Array.isArray(id)) {
            id = [id];
        }
        return db.Seat
                    .find({ _id: { $in: id } })
                    .then(seats => {
                        let failed = seats.find(seat => {
                            return (seat.status === 'reserved' && status === 'reserved');
                        });
                        if (failed) {
                            console.log('One or more seats is already taken');
                            return;
                        }
                        return db.Seat.updateMany({ _id: { $in: id } }, { status })
                    })
    },

    create: function(seatNumber) {
        return db.Seat.create({ seatNumber });
    },

    createMany: function(seatArray) {
        let seats = []
        seatArray.forEach((row, index) => {
            for(let i = 1; i <= row; i++) {
                seats.push({ seatNumber: `${String.fromCharCode(index + 65)}${i}` });
            }
        });
        return db.Seat.insertMany(seats);
    },

    delete: function(id) {
        return db.Seat.findByIdAndDelete({ _id: id })
    },

    find: function(id) {
        return db.Seat.findById(id);
    },

    free: function(id) {
        return this.changeStatus(id, 'open');
    },

    hold: function(id) {
        return this.changeStatus(id, 'held');
    },

    reserve: function(id) {
        return this.changeStatus(id, 'reserved');
    }
};