// CONFIGURATIONS 
const express = require("express");
const users = express.Router();

// IMPORTING ALL USERS QUERIES
const {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser,
} = require("../queries/users.js");


// ROUTES

// INDEX / ALL USERS
users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        res.status(200).json(allUsers);
    } else {
        res.status(500).json({error: "server error"});
    }
});

// SINGLE USER
// ---the id that will be passed here is the uid of the user from firebase---
users.get("/:id", async (req, res) => {
    const { id } = req.params;
    const singleUser = await getUser(id);
    if (singleUser) {
        res.json({ payload : singleUser, success: true });
    } else {
        res.status(404).json({ error: "not Found"});
    }
});

// EDIT USER
// ---The id being passed here is the uid of the user from Firebase---
users.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const editedUser = await updateUser(req.body, id);
        if (editedUser.uuid === id) {
            res.status(200).send(editedUser)
        } else {
            res.status(404).json({ error: "User not Found"});
        }
    } catch (error) {
        return error;
    }
});

// CREATE USER 
users.post("/", async (req, res) => {
    console.log("Creating new user");
    try {
        const newUser = await addUser(req.body);
        console.log(newUser);
        if(newUser.uuid) {
            res.status(200).json({ payload: newUser, success: true});
        } else {
            throw error;
        }
    } catch (error) {
        res.status(400).json({ error: "error", success: false });
    }
});

// DELETE USER
// --- the id being passed in here is the uid of the user from Firebase ---
users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser.uuid === id) {
        res.status(200).json(deletedUser);
    } else {
        res.status(400).json("User Not Found");
    }
});


module.exports = users;