const express = require("express");
const app = express();
const userModel = require("../Models/User");
const reservationModel= require ("../Models/Reservation");
var cors = require('cors');
app.use(cors())

app.get("/allUsers", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.post("/searchUser", async (request, response) => {  //search with Criteria
    console.log("ana el request:------- ")

    var q = {}
    let body = {
        password: "lala@la",
        email: "hii"

    };
    console.log("body: ", request.body)
    console.log("q", q)

    let v = JSON.stringify(q)
    console.log("v", v)
    const user = await userModel.find(body);

    try {
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.patch("/user/:id", async (request, response) => {  //updateUser
    try {
  
      console.log("Request: ", request.body)
      var q = {}

      if (request.body.firstName != "") {
        q.firstName = request.body.firstName
      }
      if (request.body.lastName != "") {
        q.lastName = request.body.lastName
      }
      if (request.body.passportNumber != "") {
        q.passportNumber = request.body.passportNumber
      }
      if (request.body.email != "") {
        q.email = request.body.email
      }
     
      console.log(q);
      console.log(request.params.id);
      await userModel.findByIdAndUpdate(request.params.id, q);
      response.send();
    } catch (error) {
      response.status(500).send(error);
    }
  });




  //pure habdddddd
  //TO BE TESTEEEDDDDDD test test test

  app.get("/usersflight/:id", async (request, response) => {
    var user={};
    user.UserID=request.params.id;
    const reservedFlights= await reservationModel.find(user);
    console.log(reservedFlights)


    try {
      response.send(reservedFlights);
    } catch (error) {
      response.status(500).send(error);
    }
  });



module.exports = app;