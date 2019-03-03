const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    seats: [{ type: Schema.Types.ObjectId, ref: 'Seat' }],
    reservationHolder: { type: String, required: true },
    paid: { type: Boolean, default: false }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;