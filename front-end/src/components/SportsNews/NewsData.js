import React from 'react';
import { Link } from 'react-router-dom';

const NewsData = (props) => {
  return (
    <>
    <li className='carditem'>
        <Link className='cardlink' to={props.path}>
            <figure className='cardpic' data-category={props.label}>
                <img className='cardImg' alt='sports Image' src={props.src} />
            </figure>
            <div className='cardinfo'>
                <h5 className='cardtext'>{props.text}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default NewsData;