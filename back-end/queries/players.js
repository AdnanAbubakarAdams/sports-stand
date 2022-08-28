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
};

// QUERY TO DELETE AN ICON OR PLAYER 
const deletePlayer = async (id) => {
    try {
        const deletedPlayer = await db.one("DELETE FROM players WHERE id = $1 RETURNING *", id);
        return deletedPlayer;
    } catch (error) {
        return error;
    }
};

// QUERY TO UPDATE AN IDOL OR PLAYER
const updatePlayer = async (player, id) => {
    const { name, age, team, nationality, position, prefered, image, is_idol } = player;
    try {
        const updatedPlayer = await db.one("UPDATE players SET name = $1, age = $2, team = $3, nationality = $4, position = $5, prefered = $6, image = $7, is_idol = $8 WHERE id = $9 RETURNING *",
        [name, age, team, nationality, position, prefered, image, is_idol, id])
        return updatedPlayer;
    } catch(err) {
        return err;
    }
};





module.exports = {
    getAllPlayers,
    getPlayer, 
    createPlayer,
    deletePlayer,
    updatePlayer
};