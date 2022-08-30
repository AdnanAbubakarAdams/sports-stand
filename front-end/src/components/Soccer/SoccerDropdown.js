import React,{ useState } from 'react';
import { SoccerData } from './SoccerData';
import "./Soccer.css";
import { Link } from "react-router-dom";

const SoccerDropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick} className={click ? 'clicked' : 'menu'}>
        {SoccerData.map((data, index) => {
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

export default SoccerDropdown;