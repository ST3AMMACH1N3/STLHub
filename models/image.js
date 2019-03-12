const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: { type: String, unique: true, required: true },
    alt: { type: String, default: "Skye's the Limit Studio" }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;