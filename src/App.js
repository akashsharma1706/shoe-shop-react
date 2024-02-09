// App.js
import React, { useState } from "react";
import AddShoes from "./components/AddShoes/AddShoes";
import BuyShoes from "./components/BuyShoes/BuyShoes";
import Cart from "./components/Cart/Cart";

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddShoe = (newShoe) => {
    setShoes([...shoes, newShoe]);
  };

  const handleAddToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Shoe Seller</h1>
      <div className="container">
        <AddShoes onAddShoe={handleAddShoe} />
        <BuyShoes shoes={shoes} onAddToCart={handleAddToCart} />
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;
