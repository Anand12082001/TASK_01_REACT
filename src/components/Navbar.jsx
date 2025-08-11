import React from "react";
import "./Navbar.css";
    
export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Fake Store</h1>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}
