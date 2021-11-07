const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true
  },
  DepartureDate: {
    type: Date,
    required: true,
  },
  ArrivalDate: {
    type: Date,
    required: true,
  },
  EconomySeats: {
    type: Number,
    required: true
  },

  BusinessSeats: {
    type: Number,
    required: true
  },
  FirstSeats: {
    type: Number,
    required: true
  },
  DepartureTime: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
    required: true
  },
  FlightNumber: {
    type: String,
    required: true
  },

}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;