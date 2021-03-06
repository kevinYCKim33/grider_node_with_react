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

const PORT = process.env.PORT || 5000;
// whenever heroku runs, it can inject environment variables
// heroku's opp to inject in stuff after we've deployed...

app.listen(PORT); // tells node to listen on port 5000

// node index.js inside cd server

// app: Express App to register this route handler with

// get: Watch for incoming requests with this method

// '/': watch for requests trying to access '/'

// req: Object representing the incoming request
// has bunch of data associated with the incoming request

// res: what we're vomiting back

// res.send: immediately close the request and send them back something
