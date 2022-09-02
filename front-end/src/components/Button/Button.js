import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <div className="btn-sep">
      <Link to="/players/new">
        <button className='btn'>ADD IDOL</button>
      </Link>

      <Link to="sing-up">
        <button className="btn">SIGN IN</button>
      </Link>
      <Link to="sing-in">
        <button className="btn">SIGN UP</button>
      </Link>
    </div>
  );
};

// export default Button;