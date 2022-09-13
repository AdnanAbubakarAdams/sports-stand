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
          <a href="https://www.linkedin.com/in/adnan-abubakar-adams/" class='social-icon-link linkedin' target='_blank' rel="noreferrer" aria-label='LinkedIn'>
            <i class='fab fa-linkedin'/>
          </a>
          <a href="https://github.com/AdnanAbubakarAdams" class='social-icon-link github' target='_blank'  rel="noreferrer" aria-label='GitHub'>
            <i class='fab fa-github'/>
          </a>
          <a href="https://www.twitter.com" class='social-icon-link twitter' target='_blank'  rel="noreferrer" aria-label='twitter'>
            <i class='fab fa-twitter'/>
          </a>
        </div>

      </section>
    </div>
  )
}

export default Footer;