
import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CakeCard from "../components/CakeCard";
import cakesData from "../Data";
import './Home.css';
import Footer from "../components/Footer";


const whatsappNumber = "918281384743"; // Replace with your WhatsApp number (country code + number, no "+")

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCakes = cakesData.filter((cake) =>
    cake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder = (cake) => {
    const message = `Hello! I want to order the ${cake.name} (₹${cake.price}).`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleContact = () => {
    const message = "Hi! I’d like to know more about your cakes and custom orders.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div  className=" Adiv"style={{ padding: "20px", fontFamily: "sans-serif"}}>
      <Header onContact={handleContact} />
      
       


      
 <div>

        <img src="public/image/wel.jpg" alt=""  id="im"/>

        </div>
<br />

        <div className="cgr">
          <div className="cgr1 cgra"><img src="public/image/creamymix.jpg" alt="Creamy" id="crgi"/><h1 className="ch1">Creamy</h1></div>
          <div className="cgr1 cgrb"><img src="public/image/party.jpg" alt="Creamy"id="crgi" /><h1 className="ch1">Party</h1></div>
          <div className="cgr1 cgrc"><img src="public/image/mini.jpg" alt="Creamy"id="crgi" /><h1 className="ch1">Mini</h1> </div>
          <div className="cgr1 cgrd"><img src="public/image/cup.jpg" alt="Creamy" id="crgi"/><h1 className="ch1">Combo</h1></div>
        </div><br /><br /><br />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
 
      <div
        className="adiv"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px, 2fr ))",
          
          gap: "20px",
          
          
        
        

      }}
      >
        {filteredCakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} onOrder={handleOrder} />
        ))}
      </div><br />

      <div className="images">
   

    <img src={"public/image/ok.png"}id='lastimg2'/> 
    <img src={"public/image/footer4.png"} id='lastimg'/>

    </div>



      
    </div>
  );
}

