const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const survivorSchema = new Schema({
    title: { type: String, required: true },
    dates: { type: String, required: true },
    description: { type: String, required: true },
    tuition: { type: Number, required: true },
    image: { type: String }
});

const Survivor = mongoose.model("Survivor", survivorSchema);

module.exports = Survivor;