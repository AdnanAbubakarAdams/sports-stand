import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./EditPlayer.css";
const API = process.env.REACT_APP_API_URL;

const EditPlayer = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: "",
    age: 0,
    team: "",
    nationality: "",
    position: "",
    prefered: "",
    image: "",
    is_idol: false,
  })

  const updatePlayer = (updatedPlayer) => {
    axios.put(`${API}/players/${id}`, updatedPlayer)
    .then(() => {
      navigate(`/players/${id}`)
    },
    (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
  }

   // CHECKS ON INPUT
   const textChange = (e) => {
    setPlayer({ ...player, [e.target.id]: e.target.value })
  }

  const checkboxChange = () => {
    setPlayer({ ...player, is_idol: !player.is_idol })
  }

  useEffect(() => {
    axios.get(`${API}/players/${id}`)
    .then((response) => setPlayer(response.data),
    (error) => navigate(`/not-found`)
    )
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePlayer(player, id)
  }
  return (
    <div className="Edit-player">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br/>
      <input
        id="name"
        value={player.name}
        type="text"
        onChange={textChange}
        placeholder="Idol Name"
        required
      />
      <br/>
      <label htmlFor="age">Age:</label>
      <br/>
      <input
        id="age"
        type="number"
        value={player.age}
        placeholder="Age"
        onChange={textChange}
        required
      />
      <br/>
      <label htmlFor="team">Team:</label>
      <br/>
      <input
        id="team"
        type="text"
        name="team"
        value={player.team}
        placeholder="team"
        onChange={textChange}
      />
      <br/>
      <label htmlFor="nationality">Nationality:</label>
      <br/>
      <input
        id="nationality"
        type="text"
        name="nationality"
        value={player.nationality}
        placeholder="nationality"
        onChange={textChange}
      />
      <br/>
      <label htmlFor="position">Position:</label>
      <br/>
      <input
        id="position"
        type="text"
        name="position"
        value={player.position}
        placeholder="position"
        onChange={textChange}
      />
      <br/>
      <label htmlFor="prefered">Prefered:</label>
      <br/>
      <input
        id="prefered"
        type="text"
        name="prefered"
        value={player.prefered}
        placeholder="prefered"
        onChange={textChange}
      />
      <br/>
      <label htmlFor="image">Image:</label>
      <br/>
      <input
        id="image"
        type="text"
        name="image"
        value={player.image}
        placeholder="http://"
        onChange={textChange}
      />
      <br/>
      <label htmlFor="is_idol">Idol </label>
      <input
        id="is_idol"
        type="checkbox"
        onChange={checkboxChange}
        checked={player.is_idol}
      />

      <br />
      <input type="submit" />
    </form>
  </div>
  )
}

export default EditPlayer;