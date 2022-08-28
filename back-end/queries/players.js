const players = require("../controllers/playersController.js");
const db = require("../db/dbConfig.js");

// QUERY FOR ALL PLAYERS 
const getAllPlayers = async () => {
    try {
        const allPlayers = await db.any("SELECT * FROM players")
        return allPlayers;
    } catch (err) {
        return err;
    }
};

// QUERY FOR A SINGLE PLAYER
const getPlayer = async (id) => {
    try {
        const aPlayer = await db.one("SELECT * FROM players WHERE id=$1", id);
        return aPlayer;
    } catch (error) {
        return error;
    }
};

// QUERY TO CREATE A PLAYER
const createPlayer = async (player) => {
    const { name, age, team, nationality, position, prefered, image, is_idol } = player;
    try {
        const newPlayer = await db.one(
            "INSERT INTO players (name, age, team, nationality, position, prefered, image, is_idol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [name, age, team, nationality, position, prefered, image, is_idol]
        );
        return newPlayer;
    } catch (error) {
        return error;
    }
}




module.exports = {
    getAllPlayers,
    getPlayer, 
    createPlayer
};