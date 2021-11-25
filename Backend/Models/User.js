const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    },
    reservations: {
        type: Array,
        required: true
    },


}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;