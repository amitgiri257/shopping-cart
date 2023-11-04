import React from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";


const Navbar = () => {
  return (
    <div id='navbar'>
      <nav className="nav p-2 px-3">
        
  <a className="nav-link text-white" href="#">Shopping Cart</a>
  
  <div id='nav2'>
  <a className="nav-link text-white" href="./index.html">Home Page</a>
  <a className="nav-link text-white" href="./mycard.html">Cart Page</a>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
