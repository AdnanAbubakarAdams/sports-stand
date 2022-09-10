import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Leagues = () => {
  const [leagueData, setLeagueData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((response) => {
        // console.log(response.data.data)
        setLeagueData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ul className="leagues">
      {leagueData.map((league) => {
        return (
          <li key={league.id}>
            <img src={league.logos.light} alt="logos-of-leagues" />
            <h1>{league.name}</h1>
            <p>{league.abbr}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Leagues;
