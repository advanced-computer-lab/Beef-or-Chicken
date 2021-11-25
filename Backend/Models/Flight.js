const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new Schema({

  FlightNumber: {
    unique:true,
    type: String,
    required: true
  },

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

  
  PriceEconomy: {
    type: mongoose.Decimal128,
    required: false
  },

  PriceBusiness: {
    type: mongoose.Decimal128,
    required: false
  },
  PriceFirst: {
    type: mongoose.Decimal128,
    required: false
  },

  DepartureTime: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
    required: true
  },

  
  RemEconomy: {
    type: Number,
    required: false
  },

  RemBusiness: {
    type: Number,
    required: false
  },
  RemFirst: {
    type: Number,
    required: false
  },

  Duration: {
    type: String,
    required: false
  },



}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;