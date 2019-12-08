import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  })

  const fetchItems = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const items = await data.json();
    
    console.log(items);
  }

  return (
    <div className="Shop">
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
