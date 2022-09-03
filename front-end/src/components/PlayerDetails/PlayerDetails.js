import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from '../Comments/Comments';
import "./PlayerDetails.css"

const PlayerDetails = () => {
  const [player, setPlayer] = useState([])
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;
// FETCHING A PLAYER
  useEffect(() => {
    axios.get(`${API}/players/${id}`)
    .then((response) => {
      setPlayer(response.data)
    })
  }, [id, navigate, API])

  // DELETING A PLAYER
  const deleteIdol = () => {
    axios.delete(`${API}/players/${id}`)
    .then(() => {
      navigate(`/players`)
    })
    .catch((c) => console.error("catch", c))
  }
  // THE METHOD 
  const handleDelete = () => {
    deleteIdol()
  }

  return (
    <div>
      <article className='details'>
      <aside>
      {player.is_idol ? (
            <span>🫀</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
          <h3>{player.name}</h3>
          </aside>
          <div>
            <img src={player.image} alt={player.name}/>
            <h4> Age: {player.age}</h4>
            <h4>Team: {player.team}</h4>
            <h4>Nationality: {player.nationality}</h4>
            <h4>Position(s): {player.position}</h4>
            <h4>Prefered Foot/Hand: {player.prefered}</h4>
          </div>
      </article>
      
      <div className="btn-details">
        <div>
          <Link to="/players">
            <button className="btn1">BACK</button>
          </Link>
        </div>
        <div>
          <Link to={`/players/${id}/edit`}>
            <button className="btn2">EDIT</button>
          </Link>
        </div>
        <div>
          <button className="btn3" onClick={handleDelete}>DELETE</button>
        </div>
      </div>
      <Comments />

    </div>
  )
}

export default PlayerDetails;