import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <div className='btn-sep'>
        <Link to='sing-up'>
            <button className='btn'>SIGN UP</button>
        </Link>
        <Link to='sing-in'>
            <button className='btn'>SIGN IN</button>
        </Link>

    </div>
  )
}

// export default Button;