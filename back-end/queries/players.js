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




module.exports = {
    getAllPlayers,
    getPlayer
};