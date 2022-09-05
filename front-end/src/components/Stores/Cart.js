import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange}) => {
//   const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);


  
  // METHOD TO DELETE PRODUCT FROM CART
  const handleDelete = (id) => {
      const array = cart.filter((product) => product.id !== id);
      setCart(array);
      handlePrice();
    };
    
    // METHOD 
    const handlePrice = () => {
      let added = 0;
      cart.map((product) => (added += product.quantity * product.price));
      setPrice(added);
    };
// METHOD TO HANDLE CHANGES IN CART
// const handleChange = (product, decrease) => {
//     const index = cart.indexOf(product);
//     const arr = cart;
//     arr[index].quantity += decrease;

//     if(arr[index].quantity === 0) arr[index].quantity = 1;
//     setCart([...arr]);
// }

  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {cart.map((product) => (
        <div className="cart" key={product.id}>
          <div className="img">
            <img src={product.image} alt="#" />
            <h5>{product.name}</h5>
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.quantity}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>{product.price}</span>
            <button onClick={() => handleDelete(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Cart Total</span>
        <span>$ - {price}</span>
      </div>
    </article>
  );
};

export default Cart;