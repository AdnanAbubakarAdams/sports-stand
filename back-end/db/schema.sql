DROP DATABASE IF EXISTS sports_stand_dev;
CREATE DATABASE sports_stand_dev;

\c sports_stand_dev;

DROP TABLE IF EXISTS users, players, comments, store;

CREATE TABLE users (
    uuid TEXT PRIMARY KEY UNIQUE NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    dob TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zipcode VARCHAR(5) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    email TEXT NOT NULL,
    verified BOOLEAN default false,
    profilephoto TEXT
);


CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    team TEXT,
    nationality TEXT,
    position TEXT,
    prefered TEXT,
    image TEXT, 
    is_idol BOOLEAN
);


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter TEXT,
    comment TEXT,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 10),
    player_id INTEGER REFERENCES players (id)
    ON DELETE CASCADE
);


CREATE TABLE store (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER,
    image TEXT,
    category TEXT,
    quantity INTEGER
)