import React, { useEffect, useState } from "react";
import axios from "axios";
import Player from "../Player/Player";

// Importing our API
const API = process.env.REACT_APP_API_URL;

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/players`)
      .then((response) => setPlayers(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="players-div">
      <section className="items">
        {players.map((player) => {
          return <Player key={player.id} player={player} />;
        })}
      </section>
    </div>
  );
};

export default Players;
