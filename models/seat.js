const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seatSchema = new Schema({
    status: { type: String, default: 'open'},
    seatNumber: { type: String, required: true }
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
