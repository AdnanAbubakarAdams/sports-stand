const db = require("../db/dbConfig.js");


// QUERY FOR ALL COMMENTS
const getAllComments = async (playerId) => {
    try {
        const allComments = await db.any("SELECT * FROM comments WHERE players_id=$1", playerId);
        return allComments;
    } catch (error) {
        return error;
    }
};


module.exports = { getAllComments }