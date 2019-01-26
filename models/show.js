const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    seats: [{ type: Schema.Types.ObjectId, ref: 'Seat' }],
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }]
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;