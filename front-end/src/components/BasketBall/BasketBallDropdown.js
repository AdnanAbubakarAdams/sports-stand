import React,{ useState } from 'react';
import { BasketBallData } from './BasketBallData';
import { Link } from "react-router-dom";
import ".BasketBall.css"

const BasketBallDropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick} className={click ? 'clicked' : 'menu'}>
        {BasketBallData.map((data, index) => {
            return (
                <li key={index}>
                    <Link className={data.cn} to={data.path} onClick={() => setClick(false)}>{data.title}</Link>
                </li>
            )
        })}
    </ul>

    </>
  )
}

export default BasketBallDropdown