const express = require("express");
const mongoose = require("mongoose");
const flightRouter = require("./Routes/flightRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Marky:passwordaA@cluster0.7tivt.mongodb.net/Beef-or-Chicken?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(flightRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});