// CONFIGURATIONS
const express = require("express");
const players = express.Router();

// IMPORTING ALL QUERIES
const {
    getAllPlayers,
    getPlayer,
    createPlayer
} = require("../queries/players.js");


// BUILDING OUT THE ROUTES 
// INDEX // ALL PLAYERS
players.get("/", async (req, res) => {
    const allPlayers = await getAllPlayers();
    if (allPlayers[0]) {
        res.status(200).json(allPlayers);
    } else {
        res.status(500).json({ error: "server error!"});
    }
});

// SHOW // ONE PLAYER 
players.get("/:id", async (req, res) => {
    const { id } = req.params;
    const player = await getPlayer(id)
    if(player) {
        res.json(player);
    } else {
        res.status(404).json({ error: "not Found"});
    }
});

// CREATE // CREATE AN IDOL OR PLAYER
players.post("/", async (req, res) => {
    try {
        const player = await createPlayer(req.body);
        res.json(player);
    } catch (error) {
        return error;
    }
});

module.exports = players;