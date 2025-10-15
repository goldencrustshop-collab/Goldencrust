
import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="🔍Search your favorite cake... "
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        backgroundColor:"#ffffff28",
        color:"black",
        margin: "20px 0",
        width: "98%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "40px",
        border: "1px solid #000000ff",
      }}
    />
  );
}

