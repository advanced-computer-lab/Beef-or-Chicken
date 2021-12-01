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
app.patch("/reserveSeats", async (request, response) => {  //updateUser
  try {

    console.log("Request: ", request.body)
    var q = {}

    var reservationId= request.body.reservationId;
    
    q.TakenSeats = [ request.body.seatsDeparting, request.body.seatsReturning];
    console.log("q: ", q)
    await reservationModel.findByIdAndUpdate(reservationId, q);

    response.send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/addSeatsToFlights", async (request, response) => {  //updateUser
  try {

    var q = {}

    if (request.body.flightIdDeparting != null){
      q.Seats = request.body.DepartingSeats
      await flightModel.findByIdAndUpdate(request.body.DepartingId, q);
    }

      var v = {}

      if (request.body.flightIdReturning != null){
        v.Seats = request.body.ReturningSeats
        await flightModel.findByIdAndUpdate(request.body.ReturningId, v);
      }
    
    
    

    response.send();
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
    'TakenSeatsDeparting': request.body.TakenSeatsDeparting,
    'TakenSeatsArriving': request.body.TakenSeatsArriving,
    'TotalPrice': request.body.TotalPrice,
    'Children': request.body.Children,
    'Adults': request.body.Adults,

  });



  try {
    await reservation.save(function(err, savedReservatoion) {
      if (err) console.log(err);
      else{
          var ReservationId = savedReservatoion._id;
          console.log("success", ReservationId);
          response.send(ReservationId);
      }
  });
    // await reservation.save();
    // response.send("reserved successfully");
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
      //add seats back to flight
      if (reservation.CabinType == 'Business') {
        console.log("fel business");
        //console.log("HENA BA@A1");
        var q = {};
        //console.log("HENA BA@A2");
        let newBusinessSeatsArray = DepartureFlight.BusinessSeatsArray;
        //console.log("reservation.TakenSeatsDeparting.length", reservation.TakenSeatsDeparting.length);
        for (let i = 0; i < reservation.TakenSeatsDeparting.length; i++) {
          //console.log("AR");
          //console.log(newBusinessSeatsArray[reservation.TakenSeatsDeparting[i]-1] = 0);
          newBusinessSeatsArray[reservation.TakenSeatsDeparting[i]-1] = 0;
          //console.log(newBusinessSeatsArray[reservation.TakenSeatsDeparting[i]-1] = 0);
          //console.log('be5');
         // console.log('reservation.TakenSeats[i]-1', reservation.TakenSeats[i]-1),
          //console.log('newBusinessSeatsArray[reservation.TakenSeats[i]-1]', newBusinessSeatsArray[reservation.TakenSeats[i]-1])
        }
       // console.log("newBusinessSeatsArray" , newBusinessSeatsArray);
        q.BusinessSeatsArray = newBusinessSeatsArray;
        //console.log('q.BusinessSeatsArray', q.BusinessSeatsArray);
        q.RemBusiness = DepartureFlight.RemBusiness + reservation.TakenSeatsDeparting.length;
        //console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        //console.log('7amdellah 3al salama');
        
        var p = {};
        let newBusinessSeatsArray2 = ReturnFlight.BusinessSeatsArray;
        for (let i = 0; i < reservation.TakenSeatsArriving.length; i++) {
          newBusinessSeatsArray2[reservation.TakenSeatsArriving[i]-1] = 0;
        }
        //console.log("newBusinessSeatsArray2" , newBusinessSeatsArray2);
        p.BusinessSeatsArray = newBusinessSeatsArray2;

        p.RemBusiness = ReturnFlight.RemBusiness + reservation.TakenSeatsArriving.length;
        await flightModel.findByIdAndUpdate(ReturnFlight.id, p);
        //console.log("5allasna business");

      }
      if (reservation.CabinType == 'First') {
        console.log("fel First");
        var q = {};
        q.RemFirst = DepartureFlight.RemFirst + reservation.TakenSeats.length;
        console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        var p = {};
        p.RemFirst = ReturnFlight.RemFirst + reservation.TakenSeats.length;
        await flightModel.findByIdAndUpdate(ReturnFlight.id, p);
        console.log("5allasna first");
      }

      if (reservation.CabinType == 'Economy') {
        console.log("fel economy");
        var q = {};
        q.RemEconomy = DepartureFlight.RemEconomy + reservation.TakenSeats.length;
        console.log(q);
        await flightModel.findByIdAndUpdate(DepartureFlight.id, q);
        var p = {};
        p.RemEconomy = ReturnFlight.RemEconomy + reservation.TakenSeats.length;
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