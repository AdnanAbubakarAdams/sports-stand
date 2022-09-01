import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";


const Leagues = () => {
    const [leagueData, setLeagueData] = useState([]);

    useEffect(() => {
        axios.get("https://api-football-standings.azharimm.site/leagues")
        .then((response) => {
            setLeagueData(response.data.data)
        })
        .catch((c) => console.warn("catch", c))
    },[])
  return (
    <ul className='leagues'>
        {leagueData.map((league) => {
            return (
                <li key={league.id}>
                    <img src={league.logos.light} alt="logos-of-leagues"/>
                    <h1>{league.name}</h1>
                </li>
            )
        })}

    </ul>
  )
}

export default Leagues;