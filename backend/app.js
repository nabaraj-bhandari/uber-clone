// configure dotenv
const dotenv = require("dotenv");
dotenv.config();

// imports
const express = require("express");
const cors = require("cors");

// express as app
const app = express();
app.use(cors);

// home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// export app
module.exports = app;
