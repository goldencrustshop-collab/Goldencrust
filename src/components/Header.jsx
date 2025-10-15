
// import React from "react";
// import Home from "../pages/Home";
// import Menu from "../pages/Menu";
// import './Header.css';

// export default function Header({ onContact }) {
//   return (
//     <header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 20px",
//         borderBottom: "1px solid #eee",
//       }}
//     >
//       <h1 
      
//       style={{
//          color: "#d6a533ff",
//          fontFamily:"serif",
//           }}><img src="public/image/logo1.jpg" alt="" className="logo" /> <img/>Golden Crust </h1>
//       <button
//         onClick={onContact}
//         style={{
//           backgroundColor: "#25D366",
//           fontFamily:"initial",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           padding: "10px 15px",
//           cursor: "pointer",
//         }}
//       >
//         WhatsApp
//       </button>
     
//     </header>
//   );
// }

// //  <button
// //         onClick={Menu}
        
// //         style={{
// //           backgroundColor: "#2573d3d8",
// //           fontFamily:"initial",
// //           color: "white",
// //           border: "none",
// //           borderRadius: "5px",
// //           cursor: "pointer",
// //         }}
// //       >
// //         {/* <a href="Menu.jsx" color="white">
// //         MENU </a> */}menu
// //       </button>







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Header.css";

export default function Header({ onContact }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* Left side: Menu icon */}
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        {/* Middle: Logo */}
        <h1
          style={{
            color: "#d6a533ff",
            fontFamily: "serif",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src="/image/logo1.jpg" alt="logo" className="logo" width="50" />
          Golden Crust
        </h1>

        {/* Right side: WhatsApp */}
        <button
          onClick={onContact}
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          WhatsApp
        </button>
      </header>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        onContact={onContact}
      />
    </>
  );
}
