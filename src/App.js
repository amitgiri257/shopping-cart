import './App.css';
import Navbar from './Components/Navbar';
import MainComponent from './Components/MainComponent';
import React, { useState } from 'react';
import Cart from './Components/Card'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };


  return (
    
   <>
    
    <Navbar/>
   
    <MainComponent/>
   </>
  );
}

export default App;
