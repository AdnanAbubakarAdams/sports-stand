import React from 'react';
import { Link } from "react-router-dom";
import "./Stores.css";

const Store = ({ product }) => {
  return (
    <div className='store'>
        <Link className="link" to={`/products/${product.id}`} >
        <span>
          <img src={product.image} alt="#" width='400px' height='400px'/>
        </span>
        <br/>
        <h3>
          {product.name}
        </h3>
        </Link>
    </div>
  )
}

export default Store;