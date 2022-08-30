import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div>
        <Link to='sing-up'>
            <button>SIGN UP</button>
        </Link>
        <Link to='sing-in'>
            <button>SIGN IN</button>
        </Link>

    </div>
  )
}

export default Button;