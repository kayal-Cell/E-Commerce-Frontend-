import React from 'react'
import "./Navbar.css";  
function Navbar() {
  return (
   
    <nav className="navbar">
    
      <ul className="nav-items">
        <li>Home</li>
        <li>Products</li>
        <li>Card</li>
        <div className="search-bar">
          <input type="text" placeholder='Search' />
        </div>
        <li>Login</li>
      </ul>
    </nav>  

  )
}

export default Navbar