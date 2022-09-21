import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FourOFour = () => {
  return (
    <div className="error-page">
      <h1>🔥 500 Internal Server Error </h1>
      <p> There was a problem processing your request </p>
      <p> Please contact AddySports Support </p>
      <Link to="/">
      <button type="submit"> Return Home </button>
      </Link>
    </div>
  );
};

export default FourOFour;
