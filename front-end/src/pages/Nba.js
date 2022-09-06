import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Nba = () => {
    const [nbaTeams, setNbaTeams] = useState([]);

    useEffect(() => {
        axios.get("https://www.balldontlie.io/api/v1/teams")
        .then((response) => (
            // console.log(response.data.data)
            setNbaTeams(response.data.data)
        )) 
        .catch((c) => console.warn("catch", c));
    },[])

  return (
    <div className="nba-div">
    <ul className="nba">
        {nbaTeams.map((teams) => (
            <li key={teams.id}>
                <h3>Name: {teams.full_name}</h3>
                <h3>NickName: {teams.name}</h3>
                <h3>Abbreviation: {teams.abbreviation}</h3>
                <h3>City: {teams.city}</h3>
                <h3>Conference: {teams.conference}</h3>
                <h3>Division: {teams.division}</h3>
            </li>
        ))}

    </ul>
    </div>
  )
}

export default Nba;