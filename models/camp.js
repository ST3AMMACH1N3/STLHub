const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campSchema = new Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
    tuition: { type: Number, require: true },
    showDate: { type: Date },
    ticketPrice: { type: Number },
    extendedDay: { type: Boolean, default: false },
    extendedDayPrice: { type: Number }
});

const Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;