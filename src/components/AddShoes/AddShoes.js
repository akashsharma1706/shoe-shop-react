// AddShoes.js
import React, { useState } from "react";


const AddShoes = ({ onAddShoe }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");

  const handleAddShoe = (event) => {
    event.preventDefault();
    // Create a new shoe object
    const newShoe = {
      name: name,
      description: description,
      size: size
    };
    // Pass the new shoe to the parent component
    onAddShoe(newShoe);
    // Clear the input fields
    setName("");
    setDescription("");
    setSize("");
  };

  return (
    <div>
      <h2>Add Shoes</h2>
      <form onSubmit={handleAddShoe}>
        <input 
          type="text" 
          placeholder="Shoe Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Size" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddShoes;
