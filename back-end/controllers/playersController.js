// CONFIGURATIONS
const express = require("express");
const players = express.Router();

// IMPORTING ALL QUERIES
const {
    getAllPlayers,
    getPlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
} = require("../queries/players.js");

// IMPORTING VALIDATIONS
const { validateUrl } = require("../validations/checkPlayers")


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
players.post("/", validateUrl, async (req, res) => {
    try {
        const player = await createPlayer(req.body);
        res.json(player);
    } catch (error) {
        return error;
    }
});

// DELETE // DELETE IDOL OR PLAYER
players.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPlayer = await deletePlayer(id)
    if(deletedPlayer.id) {
        res.status(200).json(deletedPlayer)
    } else {
        res.status(400).json("Idol Not Found");
    }
});

// UPDATE AN IDOL OR PLAYER
players.put("/:id", validateUrl, async (req, res) => {
    const { id } = req.params;
    const updatedPlayer = await updatePlayer(req.body, id);
    if(updatedPlayer.id) {
        res.status(200).json(updatedPlayer);
    } else {
        res.status(400).json({ error: "Your Idol has not been updated" })
    }
});

module.exports = players;