const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    show: { type: Schema.Types.ObjectId, ref: 'Show' },
    seats: [{ type: Schema.Types.ObjectId, ref: 'Seat' }],
    holder: { type: Schema.Types.ObjectId, ref: 'User' },
    paid: { type: Boolean, default: false }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;