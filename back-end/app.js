// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLERS
const playersController = require("./controllers/playersController.js");
// const commentsController = require("./controllers/commentsController.js")



// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/players", playersController)
// app.use("/comments", commentsController)



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