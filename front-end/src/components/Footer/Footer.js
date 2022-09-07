import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <Link to="/">
        ADDYSPORTS
        </Link>
        <p>© 2022 ADDYSPORTS®</p>
        <div className='my-links'>
          <Link to="https://www.linkedin.com/" class='social-icon-link linkedin' target='_blank' aria-label='LinkedIn'>
            <i class='fab fa-linkedin'/>
          </Link>
          <Link to="/" class='social-icon-link github' target='_blank' aria-label='GitHub'>
            <i class='fab fa-github'/>
          </Link>
          <Link to="/" class='social-icon-link twitter' target='_blank' aria-label='twitter'>
            <i class='fab fa-twitter'/>
          </Link>
        </div>

      </section>
    </div>
  )
}

export default Footer;