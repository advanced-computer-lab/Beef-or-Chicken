const express = require("express");
// const userModel = require("../Models/User");
const app = express();
const userModel = require("../Models/User");
//app.use(require('connect').bodyParser());
var cors = require('cors');
// app.use(require('connect').bodyParser());
app.use(cors())

app.post("/searchUser", async (request, response) => {  //search with Criteria
    console.log("ana el request:------- ")

    var q = {}
    //if (request.body.From.From != "") {
    // q.email = request.body.email.email
    // //  }
    // //  if (request.body.To.To != "") {
    //  q.password = request.body.password.password
    //yalahwaaaaaaaaaaaai
    //mesh ba2ool 7aga!!!!
    //  }
    let body = {
        password: "lala@la",
        email: "hii"

    };
    console.log("body: ", request.body)
    // console.log("1: ", request.body.FlightNumber)
    // console.log("2: ", request.body.FlightNumber.FlightNumber)
    // console.log(request.body.FlightNumber.FlightNumber != "")
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


// app.post("/searchUser", async (request, response) => {  //search with Criteria
//     console.log("ana el request:------- ")

//     var q = {}
//     //if (request.body.From.From != "") {
//     // q.email = request.body.email.email
//     // //  }
//     // //  if (request.body.To.To != "") {
//     //  q.password = request.body.password.password
//     //yalahwaaaaaaaaaaaai
//     //mesh ba2ool 7aga!!!!
//     //  }
//     let body = {
//         password: "lala@la",
//         email: "hii"

//     };
//     console.log("body: ", request.body)
//     // console.log("1: ", request.body.FlightNumber)
//     // console.log("2: ", request.body.FlightNumber.FlightNumber)
//     // console.log(request.body.FlightNumber.FlightNumber != "")
//     console.log("q", q)

//     let v = JSON.stringify(q)
//     console.log("v", v)
//     const user = await userModel.find(body);

//     try {
//         response.send(user);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });






module.exports = app;