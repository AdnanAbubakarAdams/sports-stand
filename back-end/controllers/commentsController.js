const express = require("express");

// MERGING THE PLAYERS ROUTER WITH THE COMMENTS ROUTER
const comments = express.Router({ mergeParams: true});

const { getAllComments, getComment, createComment, deleteComment, updateComment } = require("../queries/comments.js");

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

// ROUTE FOR A SINGLE COMMENT
comments.get("/:id", async (req, res) => {
    const { id } = req.params;
    const comment = await getComment(id);
    if (comment.id) {
        res.json(comment);
    } else {
        res.status(404).json({ error: "comments not here "});
    }
});

// ROUTE FOR CREATED COMMENTS 
comments.post("/", async (req, res) => {
    try {
        const createdComment = await createComment(req.body);
        res.json(createdComment)
    } catch (error) {
        res.send(422).json({error: "ERROR not a good entity"})
    }
});

// DELETE A COMMENT
comments.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedComment = await deleteComment(id);
    if(deletedComment.id) {
        res.status(200).json(deletedComment)
    } else {
        res.status(404).json({ error: "comment with this ID not found"})
    }
});

comments.put("/:id", async (req, res) => {
    const {id} = req.params;
    const updatedcomment = await updateComment(id, req.body)
    if (updatedcomment.id) {
        res.status(200).json(updateReview)
    } else {
        res.status(404).json({ error: "can not update comment, because its not found"})
    }
})


module.exports = comments;

