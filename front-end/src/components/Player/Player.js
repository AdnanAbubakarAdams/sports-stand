import React from 'react';
import { Link } from "react-router-dom";
import "./Player.css";

const Player = ({ player }) => {
  return (
    <div className='player'>
        <Link className="link" to={`/players/${player.id}`} >
        <span>
          <img src={player.image} alt={player.is_idol} width='400px' height='400px'/>
        </span>
        <br/>
        </Link>
        <h3>
          {player.is_idol ? (
            <span>🫀</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
          {player.name}
        </h3>
    </div>
  )
}

export default Player;