import React, { useEffect } from 'react';
import axios from 'axios';
// import Idol from "../Idol/Idol";

// Importing our API 
const API = process.env.REACT_APP_API_URL;

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/`)
  })
  return (
    <div>

    </div>
  )
}

export default Players;