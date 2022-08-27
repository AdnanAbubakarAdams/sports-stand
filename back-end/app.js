// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLERS


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES 
// THE WELCOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to SPORTSTAND")
});

// THE CATCH ALL 404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("page not found, please try again")
})


// EXPORT
module.exports = app;