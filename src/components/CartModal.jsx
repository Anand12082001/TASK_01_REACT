import React from "react";
import "./CartModal.css";

export default function CartModal({ cart, onClose, removeFromCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
