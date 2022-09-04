DROP DATABASE IF EXISTS sports_stand_dev;
CREATE DATABASE sports_stand_dev;

\c sports_stand_dev;

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

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter TEXT,
    comment TEXT,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 10),
    player_id INTEGER REFERENCES players (id)
    ON DELETE CASCADE
)

DROP TABLE IF EXISTS store;

CREATE TABLE store (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER,
    image TEXT,
    category TEXT,
)