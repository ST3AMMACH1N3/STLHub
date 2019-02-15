const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    admin: { type: Boolean, default: false },
    reservations: { type: Schema.Types.ObjectId, ref: 'Reservation' }
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    return next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;