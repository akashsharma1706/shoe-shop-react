// ShoeContext.js
import React, { createContext, useState } from 'react';

export const ShoeContext = createContext();

export const ShoeProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ShoeContext.Provider value={{ shoes, setShoes, cart, setCart }}>
      {children}
    </ShoeContext.Provider>
  );
};
