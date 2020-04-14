// start up file of a node project by convention is called index.js
const express = require("express"); // gives me access to express...
// commonJS modules...

// import express from "express"; // es2015 modules
// nodejs does not support import at the time of grider's course...
// the frontend will have much easier syntax
const app = express(); // represents a running express app
// all routes will be associated with the app object

// when we hit the root directory, respond with this json object
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000); // listen on port 5000

// node index.js inside cd server
