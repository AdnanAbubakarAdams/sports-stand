const db = require("../db/dbConfig.js");

// ALL USERS
const getAllUsers = async () => {
    try {
        console.log("Listing all users from the users table");
        const allUsers = await db.any("SELECT * FROM users ORDER BY uuid ASC");
        return allUsers; 
    } catch (error) {
        return error;
    }
};

// ROUTES

// SINGLE USER
const getUser = async (uuid) => {
    try {
        console.log("Retreiving user from table users");
        const aUser = await db.one("SELECT * FROM users WHERE uuid=$1", uuid);
        return aUser;
    } catch (error) {
        return error;
    }
};

// ADD USER
const addUser = async(user) => {
    console.log("Add a new user to the database");
    try {
        const newUser = await db.one(
            "INSERT INTO users (uuid, firstname, lastname, dob, city, state, zipcode, phonenumber, email, verified, profilephoto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
            [
                user.uuid,
                user.firstname,
                user.lastname,
                user.dob,
                user.city,
                user.state,
                user.zipcode,
                user.phonenumber,
                user.email,
                user.verified,
                user.profilephoto,
            ]
        );
        return newUser;
    } catch (error) {
        return error;
    }
};

// DELETE USER =>  requires auth from admin
const deleteUser = async (uuid) => {
    console.log("Remove user " + uuid);
    try {
        const deletedUser = await db.one(
            "DELETE FROM users WHERE uuid=$1 RETURNING *",
            uuid
        );
        return deletedUser;
    } catch (error) {
        return error;
    }
};

// EDIT USER - 
const updateUser = async (user, uuid) => {
    try {
        console.log("Editing or updating user with id of " + uuid);
        const editedUser = await db.one(
            "UPDATE users SET firstname=$1, lastname=$2, dob=$3, city=$4, state=$5, zipcode=$6, phonenumber=$7, email=$8, verified=$9, profilephoto=$10 WHERE uuid=$11 RETURNING *",
            [
                user.firstname,
                user.lastname,
                user.dob,
                user.city,
                user.state,
                user.zipcode,
                user.phonenumber,
                user.email,
                user.verified,
                user.profilephoto,
                uuid,
            ]
        );
        return editedUser;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser,
};