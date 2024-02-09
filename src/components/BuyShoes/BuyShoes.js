// BuyShoes.js
import React from "react";

const BuyShoes = ({ shoes, onAddToCart }) => {
  return (
    <div>
      <h2>Buy Shoes</h2>
      {shoes.map((shoe, index) => (
        <div key={index}>
          <h3>{shoe.name}</h3>
          <p>Description: {shoe.description}</p>
          <p>Size: {shoe.size}</p>
          <button onClick={() => onAddToCart(shoe)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BuyShoes;
