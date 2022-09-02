const db = require("../db/dbConfig.js");


// QUERY FOR ALL COMMENTS
const getAllComments = async (playerId) => {
    try {
        const allComments = await db.any("SELECT * FROM comments WHERE player_id = $1", playerId);
        return allComments;
    } catch (error) {
        return error;
    }
};

// QUERY FOR ONE COMMENT
const getComment = async (id) => {
    try {
        const comment = await db.one("SELECT * FROM comments WHERE id = $1", id);
        return comment;
    } catch (error) {
        return error;
    }
};

// QUERY FOR CREATE COMMENT
const createComment = async (comments) => {
    const { player_id, commenter, comment, rating } = comments;
    try {
        const createdComment = await db.one(
            "INSERT INTO comments (player_id, commenter, comment, rating) VALUES ($1, $2, $3, $4) RETURNING *",
            [player_id, commenter, comment, rating])
            return createdComment;
    } catch (error) {
        return error;
    }
};

// QUERY TO DELETE A COMMENT 
const deleteComment = async (id) => {
    try {
        const deletedComment = await db.one("DELETE FROM comments WHERE id = $1 RETURNING *", id)
        return deletedComment;
    } catch (error) {
        return error;
    }
};

// QUERY TO UPDATE A COMMENT
const updateComment = async (id, comments) => {
    const { player_id, commenter, comment, rating } = comments;
    try {
        const updatedComment = await db.one("UPDATE comments SET player_id=$1, commenter = $2, comment = $3, rating =$4 WHERE id = $5 RETURNING *",
        [player_id, commenter, comment, rating])
        return updatedComment;
    } catch (error) {
        return error
    }
}


module.exports = { getAllComments, getComment, createComment, deleteComment, updateComment }