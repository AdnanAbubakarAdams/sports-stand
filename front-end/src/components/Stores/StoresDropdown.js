import React,{ useState } from 'react';
import { StoresData } from './StoresData';
import { Link } from "react-router-dom";
import './Stores.css';


const StoresDropdown = () => {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick} className={click ? 'clicked' : 'menu'}>
        {StoresData.map((data, index) => {
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

export default StoresDropdown;