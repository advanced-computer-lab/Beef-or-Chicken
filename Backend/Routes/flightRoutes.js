const express = require("express");
const flightModel = require("../Models/Flight");
const app = express();
var cors = require('cors')
app.use(cors())

const userModel = require("../Models/User");
app.get("/allflights", async (request, response) => {
  const flights = await flightModel.find({});

  try {
    response.send(flights);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/searchUser", async (request, response) => {  //search with Criteria
  console.log("ana el request:------- ")

  var q = {}
  //if (request.body.From.From != "") {
  q.email = request.body.email.email
  // //  }
  // //  if (request.body.To.To != "") {
  q.password = request.body.password.password
  //yalahwaaaaaaaaaaaai
  //mesh ba2ool 7aga!!!!
  //  }
  let body = {
    password: "lala@la",
    email: "hii"

  };

  console.log("body: ", q)
  // console.log("1: ", request.body.FlightNumber)
  // console.log("2: ", request.body.FlightNumber.FlightNumber)
  // console.log(request.body.FlightNumber.FlightNumber != "")
  console.log("q", q)

  // // let v = JSON.stringify(q)
  // console.log("v", v)
  const user = await userModel.find(q);

  try {
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});





app.post("/searchFlights", async (request, response) => {  //search with Criteria
  console.log("ana el request: ", request.body.From)

  var q = {}
  if (request.body.From.From != "") {
    q.From = request.body.From.From
  }
  if (request.body.To.To != "") {
    q.To = request.body.To.To
  }
  if (request.body.DepartureDate.DepartureDate != "") {
    q.DepartureDate = request.body.DepartureDate.DepartureDate + "T00:00:00.000Z"
  }
  if (request.body.ArrivalDate.ArrivalDate != "") {
    q.ArrivalDate = request.body.ArrivalDate.ArrivalDate + "T00:00:00.000Z"
  }
  if (request.body.FirstSeats.FirstSeats != null) {
    q.FirstSeats = request.body.FirstSeats.FirstSeats
  }
  if (request.body.BusinessSeats.BusinessSeats != null) {
    q.BusinessSeats = request.body.BusinessSeats.BusinessSeats
  }
  if (request.body.EconomySeats.EconomySeats != null) {
    q.EconomySeats = request.body.EconomySeats.EconomySeats
  }
  if (request.body.ArrivalTime.ArrivalTime != "") {
    q.ArrivalTime = request.body.ArrivalTime.ArrivalTime
  }
  if (request.body.DepartureTime.DepartureTime != "") {
    q.DepartureTime = request.body.DepartureTime.DepartureTime
  }
  if (request.body.FlightNumber.FlightNo != '') {
    q.FlightNumber = request.body.FlightNumber.FlightNo
  }
  console.log("body: ", request.body)
  console.log("1: ", request.body.FlightNumber)
  console.log("2: ", request.body.FlightNumber.FlightNumber)
  console.log(request.body.FlightNumber.FlightNumber != "")
  console.log("q", q)
  let v = JSON.stringify(q)
  console.log("v", v)
  const flights = await flightModel.find(q);

  try {
    response.send(flights);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.post("/createFlight", async (request, response) => {
  console.log((request.body.DepartureTime) + "")  //createFlights -> currently with Json and postman
  const flight = new flightModel({
    'From': request.body.From,
    'To': request.body.To,
    'DepartureDate': request.body.DepartureDate,
    'ArrivalDate': request.body.ArrivalDate,
    'EconomySeats': request.body.EconomySeats,
    'RemEconomy':request.body.EconomySeats,
    'BusinessSeats': request.body.BusinessSeats,
    'RemBusiness': request.body.BusinessSeats,
    'FirstSeats': request.body.FirstSeats,
    'RemFirst': request.body.FirstSeats,
    'DepartureTime': (request.body.DepartureTime) + "",
    'ArrivalTime': (request.body.ArrivalTime) + "",
    'FlightNumber': request.body.FlightNumber,
    'PriceEconomy':request.body.EconomyPrice,
    'PriceBusiness':request.body.BusinessPrice,
    'PriceFirst':request.body.FirstPrice,
  });

  try {
    await flight.save();
    response.send("Flight sent successfully");
  } catch (error) {
    response.status(500).send(error);
  }
});



app.patch("/flight/:id", async (request, response) => {  //update
  try {

    console.log("ana el request: ", request.body)

    var q = {}
    if (request.body.From.From != "") {
      q.From = request.body.From.From
    }
    if (request.body.To.To != "") {
      q.To = request.body.To.To
    }
    if (request.body.DepartureDate.DepartureDate != "") {
      q.DepartureDate = request.body.DepartureDate.DepartureDate + "T00:00:00.000Z"
    }
    if (request.body.ArrivalDate.ArrivalDate != "") {
      q.ArrivalDate = request.body.ArrivalDate.ArrivalDate + "T00:00:00.000Z"
    }
    if (request.body.FirstSeats.FirstSeats != null) {
      q.FirstSeats = request.body.FirstSeats.FirstSeats
    }
    if (request.body.BusinessSeats.BusinessSeats != null) {
      q.BusinessSeats = request.body.BusinessSeats.BusinessSeats
    }
    if (request.body.EconomySeats.EconomySeats != null) {
      q.EconomySeats = request.body.EconomySeats.EconomySeats
    }
    if (request.body.ArrivalTime.ArrivalTime != "") {
      q.ArrivalTime = request.body.ArrivalTime.ArrivalTime
    }
    if (request.body.DepartureTime.DepartureTime != "") {
      q.DepartureTime = request.body.DepartureTime.DepartureTime
    }
    if (request.body.FlightNumber.FlightNo != '') {
      q.FlightNumber = request.body.FlightNumber.FlightNo
    }

    console.log(q);
    console.log(request.params.id);
    await flightModel.findByIdAndUpdate(request.params.id, q);
    console.log("first line");
    //  await flightModel.save();
    // console.log("Second line");
    response.send();
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...




app.delete("/flight/:id", async (request, response) => {
  try {
    const flight = await flightModel.findByIdAndDelete(request.params.id);

    if (!flight) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;