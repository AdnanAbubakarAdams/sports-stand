const express = require("express");

// MERGING THE PLAYERS ROUTER WITH THE COMMENTS ROUTER
const comments = express.Router({ mergeParams: true });

const { getAllComments } = require("../queries/comments.js");

// ROUTE FOR ALL COMMENTS
comments.get("/", async (req, res) => {
    const { playerId } = req.params;
    const allComments = await getAllComments(playerId);
    if (allComments[0]) {
        res.status(200).json(allComments)
    } else {
        res.status(500).json({ error: "server error"});
    }
});

module.exports = comments;

