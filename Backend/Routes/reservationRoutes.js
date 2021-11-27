const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const flightModel = require("../Models/Flight");
const userModel = require("../Models/User");
const reservationModel = require("../Models/Reservation");


app.get("/allReservations", async (request, response) => {
  const reservations = await reservationModel.find({});

  try {
    response.send(reservations);
  } catch (error) {
    response.status(500).send(error);
  }
});

// app.post("/searchUser", async (request, response) => {  //search with Criteria
//   console.log("ana el request:------- ")

//   var q = {}
//   //if (request.body.From.From != "") {
//   q.email = request.body.email.email
//   // //  }
//   // //  if (request.body.To.To != "") {
//   q.password = request.body.password.password
//   //yalahwaaaaaaaaaaaai
//   //mesh ba2ool 7aga!!!!
//   //  }
//   let body = {
//     password: "lala@la",
//     email: "hii"

//   };

//   console.log("body: ", q)
//   console.log("q", q)
//   const user = await userModel.find(q);

//   try {
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });





// app.post("/searchFlights", async (request, response) => {  //search with Criteria
//   console.log("ana el request: ", request.body.From)

//   var q = {}
//   if (request.body.From.From != "") {
//     q.From = request.body.From.From
//   }
//   if (request.body.To.To != "") {
//     q.To = request.body.To.To
//   }
//   if (request.body.DepartureDate.DepartureDate != "") {
//     q.DepartureDate = request.body.DepartureDate.DepartureDate + "T00:00:00.000Z"
//   }
//   if (request.body.ArrivalDate.ArrivalDate != "") {
//     q.ArrivalDate = request.body.ArrivalDate.ArrivalDate + "T00:00:00.000Z"
//   }
//   if (request.body.FirstSeats.FirstSeats != null) {
//     q.FirstSeats = request.body.FirstSeats.FirstSeats
//   }
//   if (request.body.BusinessSeats.BusinessSeats != null) {
//     q.BusinessSeats = request.body.BusinessSeats.BusinessSeats
//   }
//   if (request.body.EconomySeats.EconomySeats != null) {
//     q.EconomySeats = request.body.EconomySeats.EconomySeats
//   }
//   if (request.body.ArrivalTime.ArrivalTime != "") {
//     q.ArrivalTime = request.body.ArrivalTime.ArrivalTime
//   }
//   if (request.body.DepartureTime.DepartureTime != "") {
//     q.DepartureTime = request.body.DepartureTime.DepartureTime
//   }
//   if (request.body.FlightNumber.FlightNo != '') {
//     q.FlightNumber = request.body.FlightNumber.FlightNo
//   }
//   console.log("body: ", request.body)
//   console.log("1: ", request.body.FlightNumber)
//   console.log("2: ", request.body.FlightNumber.FlightNumber)
//   console.log(request.body.FlightNumber.FlightNumber != "")
//   console.log("q", q)
//   let v = JSON.stringify(q)
//   console.log("v", v)
//   const flights = await flightModel.find(q);

//   try {
//     response.send(flights);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


// app.post("/createFlight", async (request, response) => {
//   console.log((request.body.DepartureTime) + "")  //createFlights -> currently with Json and postman
//   const flight = new flightModel({
//     'From': request.body.From,
//     'To': request.body.To,
//     'DepartureDate': request.body.DepartureDate,
//     'ArrivalDate': request.body.ArrivalDate,
//     'EconomySeats': request.body.EconomySeats,
//     'BusinessSeats': request.body.BusinessSeats,
//     'FirstSeats': request.body.FirstSeats,
//     'DepartureTime': (request.body.DepartureTime) + "",
//     'ArrivalTime': (request.body.ArrivalTime) + "",
//     'FlightNumber': request.body.FlightNumber,

//   });

//   try {
//     await flight.save();
//     response.send("Flight sent successfully");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });



// app.patch("/flight/:id", async (request, response) => {  //update
//   try {

//     console.log("ana el request: ", request.body)

//     var q = {}
//     if (request.body.From.From != "") {
//       q.From = request.body.From.From
//     }
//     if (request.body.To.To != "") {
//       q.To = request.body.To.To
//     }
//     if (request.body.DepartureDate.DepartureDate != "") {
//       q.DepartureDate = request.body.DepartureDate.DepartureDate + "T00:00:00.000Z"
//     }
//     if (request.body.ArrivalDate.ArrivalDate != "") {
//       q.ArrivalDate = request.body.ArrivalDate.ArrivalDate + "T00:00:00.000Z"
//     }
//     if (request.body.FirstSeats.FirstSeats != null) {
//       q.FirstSeats = request.body.FirstSeats.FirstSeats
//     }
//     if (request.body.BusinessSeats.BusinessSeats != null) {
//       q.BusinessSeats = request.body.BusinessSeats.BusinessSeats
//     }
//     if (request.body.EconomySeats.EconomySeats != null) {
//       q.EconomySeats = request.body.EconomySeats.EconomySeats
//     }
//     if (request.body.ArrivalTime.ArrivalTime != "") {
//       q.ArrivalTime = request.body.ArrivalTime.ArrivalTime
//     }
//     if (request.body.DepartureTime.DepartureTime != "") {
//       q.DepartureTime = request.body.DepartureTime.DepartureTime
//     }
//     if (request.body.FlightNumber.FlightNo != '') {
//       q.FlightNumber = request.body.FlightNumber.FlightNo
//     }

//     console.log(q);
//     console.log(request.params.id);
//     await flightModel.findByIdAndUpdate(request.params.id, q);
//     console.log("first line");
//     //  await flightModel.save();
//     // console.log("Second line");
//     response.send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// // ...




app.delete("/reservation/:id", async (request, response) => {
  try {
    const reservation = await reservationModel.findByIdAndDelete(request.params.id);
    if(!reservation){  
        //console.log("Mafish");
        response.status(404).send("No item found");
        response.status(200).send();
    
    }
    else{
        console.log("Fih ah");
        //add seats back to flight
        const DepartureFlight = await flightModel.findById(reservation.DepartureFlightID);
        const ReturnFlight = await flightModel.findById(reservation.ReturnFlightID);
        //console.log(ReturnFlight);
        //console.log(reservation.CabinType);

        if(reservation.CabinType == 'Business'){
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
        if(reservation.CabinType == 'First'){
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

     if(reservation.CabinType == 'Economy'){
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

     //refund (via email) 
     const totalPrice = reservation.TotalPrice.toString();
     //console.log(totalPrice);
     response.send();
    }  
  } catch (error) {
    response.status(500).send(error);
  }
});




module.exports = app;