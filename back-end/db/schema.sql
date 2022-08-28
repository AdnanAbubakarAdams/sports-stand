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
)