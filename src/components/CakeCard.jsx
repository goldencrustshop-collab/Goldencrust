
import React from "react";

export default function CakeCard({ cake, onOrder }) {
  return (
    <div
      style={{
        border: "0px solid #fffdfdff",
        // boxShadow-"5px 3px 5px",
        borderRadius: "10px",
        color:"white",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 6px 10px rgba(255, 248, 252, 0.41) ",
      }}
    >
      <img
        src={cake.image}
        alt={cake.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{cake.name}</h3>
      <p>₹{cake.price}</p>
      <button
        onClick={() => onOrder(cake)}
        style={{
          backgroundColor: "#25D366",
          color: "",
          border: "none",
          borderRadius: "5px",
          padding: "8px 11px",
          cursor: "pointer",
          
        }}
      >
        Order on WhatsApp
      </button>
    </div>
  );
}

