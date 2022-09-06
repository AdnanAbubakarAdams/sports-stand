import React from 'react';
import { Link } from "react-router-dom";
import "./Stores.css";

const Store = ({ product, handleClick }) => {
  return (
    <div className='store'>
        <Link className="link" to={`/products/${product.id}`} >
        <span>
          <img src={product.image} alt="#" width='400px' height='400px'/>
        </span>
        <br/>
        </Link>
        <h3>
          {product.name}
        </h3>
        <h4>Price-${product.price}</h4>
        <button onClick={() => handleClick(product)}>Add To Cart</button>
    </div>
  )
}

export default Store;