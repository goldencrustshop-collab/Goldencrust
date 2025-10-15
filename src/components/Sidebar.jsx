import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar, onContact }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>✕</button>

      <ul>
        <li onClick={() => { navigate("/"); toggleSidebar(); }}>🏠 Home</li>
        <li onClick={() => { navigate("/menu"); toggleSidebar(); }}>🍰 Menu</li>
        <li onClick={() => { onContact(); toggleSidebar(); }}>💬 WhatsApp</li>
      </ul>
    </div>
  );
}
