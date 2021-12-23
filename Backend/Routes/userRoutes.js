const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config();
const nodemailer = require('nodemailer')
const userModel = require("../Models/User");
const reservationModel = require("../Models/Reservation");
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
app.get("/userById/:id", async (request, response) => {
  const user = await userModel.findById(request.params.id);

  try {
    response.send(user);
  }
  catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/user/:id", async (request, response) => {  //updateUser
  try {

    console.log("Request: ", request.body)
    var q = {}

    if (request.body.firstName.firstName != "") {
      q.firstName = request.body.firstName.firstName
    }
    if (request.body.lastName.lastName != "") {
      q.lastName = request.body.lastName.lastName
    }
    if (request.body.passportNumber.passportNumber != "") {
      q.passportNumber = request.body.passportNumber.passportNumber
    }
    if (request.body.email.email != "") {
      q.email = request.body.email.email
    }

    console.log(q);
    console.log(request.params.id);
    await userModel.findByIdAndUpdate(request.params.id, q);
    response.send();
  } catch (error) {
    response.status(500).send(error);
  }
});


app.post('/login', (req, res) => {
  const userLoggedIn = req.body
  userModel.findOne({ username: userLoggedIn.username })
    .then(dbUser => {
      if (!dbUser) {
        return res.json({
          message: "Invalid Username or Password"
        })
      }
      bcrypt.compare(userLoggedIn.password, dbUser.password)
        .then(isCorrect => {
          if (isCorrect) {
            const payload = {
              id: dbUser._id,
              username: dbUser.username,
                  type:dbUser.type
            }
            jwt.sign(
              payload,
              "" + process.env.JWT_SECRET,
              { expiresIn: 86400 },
              (err, token) => {
                if (err) return res.json({ message: err })
                return res.json({
                  message: "Success",
                  token: "Bearer " + token,
                  UserID : payload.id,
                  type:payload.type
                })
              }
            )

            //console.log("token", token)
          }
          else {
            return res.json({
              message: "Invalid Username or Password"
            })
          }
        })
    })
})



app.post('/register', async (req, res) => {
  const user = req.body;
  console.log(user);
  const takenUsername = await userModel.findOne({ username: user.username })
 console.log(takenUsername);

    if(takenUsername){
      res.json({ message: "username taken" })
    }else {
      user.password = await bcrypt.hash(req.body.password, 10);
  
      const dbUser = new userModel({
        username: user.username,
        email: user.email.toLowerCase(),
        password: user.password,
        type: 1,
        firstName: user.firstName,
        lastName: user.lastName,
        passportNumber: user.passportNumber,
        reservations: [],
        address : user.address,
        telephone1: user.telephone1,   
        telephone2: user.telephone2
      }
      )
      dbUser.save()

      const payload = {
        id: dbUser._id,
        username: dbUser.username,
      }
      jwt.sign(
        payload,
        "" + process.env.JWT_SECRET,
        { expiresIn: 86400 },
        (err, token) => {
          if (err) return res.json({ message: err })
          return res.json({
            token: "Bearer "+token,
            message :"success",
            UserId : payload.id
          })
        }
      )

    }
  }
  
)


app.post('/CheckUsername', async (req, res) => {
  const user = req.body;
  console.log(user);
  const takenUsername = await userModel.findOne({ username: user.username })
console.log(takenUsername)
    if(takenUsername){
      res.json({ message: "taken" })
    }else {
      res.json({ message: "not" })
      }
  
  
})




//pure habdddddd
//TO BE TESTEEEDDDDDD test test test

app.get("/usersflight/:id", async (request, response) => {
  var user = {};
  user.UserID = request.params.id;
  const reservedFlights = await reservationModel.find(user);
  console.log(reservedFlights)

  try {
    response.send(reservedFlights);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;