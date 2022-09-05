import React, { useEffect, useState } from "react";
import axios from "axios";
import Store from "./Store";
import "./Stores.css";

// Importing our API
const API = process.env.REACT_APP_API_URL;

const Stores = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  // const handleClick = (product) => {
  //   if (cart.indexOf(product) !== -1) return;
  //   setCart([...cart, product])
  // }

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="products">
      <ul className="items">
        {products.map((product) => {
          return (
            <li key={product.id}>
          <Store key={product.id} product={product} handleClick={handleClick}/>
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Stores;
