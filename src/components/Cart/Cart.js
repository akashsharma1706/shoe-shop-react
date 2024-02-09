// Cart.js
import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Description: {item.description}</p>
          <p>Size: {item.size}</p>
          <button onClick={() => onRemoveFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
