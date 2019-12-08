import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  })

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const items = await data.json();
    
    console.log(items);
    setItems(items.message);
  }


  return (
    <div className="Shop">
      {items.map(item => (
        <img src={item}/>
      ))}
    </div>
  );
}

export default Shop;
