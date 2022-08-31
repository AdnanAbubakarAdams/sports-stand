import React from 'react';
import { Link } from "react-router-dom";

const Player = ({ player }) => {
  return (
    <div className='player'>
        <Link to={`/players/${player.id}`} >
        <span>
          <img src={player.image} alt={player.is_idol} width='200px' height='200px'/>
        </span>
        <br/>
        <h3>
          {player.name}
        </h3>
        </Link>
    </div>
  )
}

export default Player;