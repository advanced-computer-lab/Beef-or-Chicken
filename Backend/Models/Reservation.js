const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    UserID: {
        type: String,
        required: true,
    },
    DepartureFlightID: {
        type: String,
        required: true
    },
    ReturnFlightID: {
        type: String,
        required: true
    },
    CabinType: {
        type: String,
        required: true
    },
    TakenSeats: {
        type: Array,
        required: true,
    },
    TotalPrice: {
        type: mongoose.Decimal128,
        required: true,
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;