const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const flightModel = require("../Models/Flight");
const userModel = require("../Models/User");
const reservationModel = require("../Models/Reservation");
const nodemailer = require("nodemailer");


app.get("/allReservations", async (request, response) => {
  const reservations = await reservationModel.find({});

  try {
    response.send(reservations);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/createReservation", async (request, response) => {
  //console.log((request.body.DepartureTime) + "")  //createFlights -> currently with Json and postman

  // var EconomySeats = request.body.EconomySeats;
  // var BusinessSeats = request.body.BusinessSeats;
  // var FirstSeats = request.body.FirstSeats;
  // var seats = [];
  // var tmpEconomy = [];
  // var tmpBusiness = [];
  // var tmpFirst = [];
  // for (let i = 0; i < EconomySeats; i++) {
  //   tmpEconomy.push(0);
  // }
  // seats.push(tmpEconomy);
  // for (let i = 0; i < BusinessSeats; i++) {
  //   tmpBusiness.push(0);
  // }
  // seats.push(tmpBusiness);
  // for (let i = 0; i < FirstSeats; i++) {
  //   tmpFirst.push(0);
  // }
  // seats.push(tmpFirst);


  const reservation = new reservationModel({
    'UserID': request.body.UserID,
    'DepartureFlightID': request.body.DepartureFlightID,
    'ReturnFlightID': request.body.ReturnFlightID,
    'CabinType': request.body.CabinType,
    'TakenSeats': request.body.TakenSeats,
    'TotalPrice': request.body.TotalPrice,
    'Children': request.body.Children,
    'Adults': request.body.Adults,

  });



  try {
    await reservation.save();
    response.send("reserved successfully");
  } catch (error) {
    response.status(500).send(error);
  }
});




app.delete("/reservation/:id", async (request, response) => {
  try {
    const reservation = await reservationModel.findByIdAndDelete(request.params.id);
    if (!reservation) {
      //console.log("Mafish");
      response.status(404).send("No item found");
      response.status(200).send();

    }
    else {
      const DepartureFlight = await flightModel.findById(reservation.DepartureFlightID);
      const ReturnFlight = await flightModel.findById(reservation.ReturnFlightID);
      const User = await userModel.findById(reservation.UserID);

      //refund (via email) 
      const totalPrice = reservation.TotalPrice.toString();

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "BeefOrChickenACL@gmail.com",
          pass: "beeforchicken"
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let mailOptions = {

        from: "BeefOrChickenACL@gmail.com",
        to: User.email,
        subject: "Your reservation has been canceled",
        text: "Dear " + User.firstName + ", your reservation with Beef or Chicken airlines has been canceled successfully, your refund amount is " + totalPrice + " EGP",
      };

      transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
          console.log(err)
        } else {
          console.log("Mail sent successfully");
        }
      });
      // console.log("Fih ah");
      //add seats back to flight
      if (reservation.CabinType == 'Business') {
        console.log("fel business");
        var q = {};
        q.BusinessSeats = DepartureFlight.BusinessSeats + reservation.TakenSeats.length;
        console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        var p = {};
        p.BusinessSeats = ReturnFlight.BusinessSeats + reservation.TakenSeats.length;
        await flightModel.findByIdAndUpdate(ReturnFlight.id, p);
        console.log("5allasna business");

      }
      if (reservation.CabinType == 'First') {
        console.log("fel First");
        var q = {};
        q.FirstSeats = DepartureFlight.FirstSeats + reservation.TakenSeats.length;
        console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        var p = {};
        p.FirstSeats = ReturnFlight.FirstSeats + reservation.TakenSeats.length;
        await flightModel.findByIdAndUpdate(ReturnFlight.id, p);
        console.log("5allasna first");
      }

      if (reservation.CabinType == 'Economy') {
        console.log("fel economy");
        var q = {};
        q.EconomySeats = DepartureFlight.EconomySeats + reservation.TakenSeats.length;
        console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        var p = {};
        p.EconomySeats = ReturnFlight.EconomySeats + reservation.TakenSeats.length;
        await flightModel.findByIdAndUpdate(ReturnFlight.id, p);
        console.log("5allasna economy");
      }
      //console.log(totalPrice);
      response.send();
    }
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;