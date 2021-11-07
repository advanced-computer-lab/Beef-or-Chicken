const express = require("express");
const flightModel = require("../Models/Flight");
const app = express();
var cors = require('cors')
app.use(cors())

app.get("/allflights", async (request, response) => {
  const flights = await flightModel.find({});

  try {
    response.send(flights);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/searchFlights", async (request, response) => {  //search with Criteria
  console.log("ana el request: ", request.body.From)
  var q = {}
  if (request.body.From.from != "") {
    q.From = request.body.From.from
  }
  if (request.body.To.to != "") {
    q.To = request.body.To.to
  }
  if (request.body.FlightDate.date != "") {
    q.FlightDate = request.body.FlightDate.date + "T00:00:00.000Z"
  }
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
    'BusinessSeats': request.body.BusinessSeats,
    'FirstSeats': request.body.FirstSeats,
    'DepartureTime': (request.body.DepartureTime) + "" ,
    'ArrivalTime': (request.body.ArrivalTime) + "",
    'FlightNumber': request.body.FlightNumber,
   
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
    await flightModel.findByIdAndUpdate(request.params.id, request.body);
    await flightModel.save();
    response.send(flight);
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