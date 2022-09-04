import React, { useEffect, useState } from "react";
import axios from "axios";
import Store from "./Store";
import "./Stores.css";

// Importing our API
const API = process.env.REACT_APP_API_URL;

const Stores = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="products-div">
      <ul className="items">
        {products.map((product) => {
          return (
            <li>
          <Store key={product.id} product={product} />
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Stores;
