import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Menu() {
  const handleContact = () => {
    window.open("https://wa.me/918281384743", "_blank"); // WhatsApp link
  };

  return (
    <div>
      <Header onContact={handleContact} />
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>🍰 Our Menu</h2>
        <p>Explore our tasty cakes and treats!</p>
      </div>
      <Footer />
    </div>
  );
}
