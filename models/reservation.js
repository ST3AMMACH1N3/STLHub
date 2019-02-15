const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    seats: [{ type: Schema.Types.ObjectId, ref: 'Seat' }],
    reservationHolder: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    paid: { type: Boolean, default: false }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;