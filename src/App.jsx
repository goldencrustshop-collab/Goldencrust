
// import React from "react";
// import Home from "./pages/Home";
// import "./App.css";

// export default function App() {
//   return (
    
//     <div className="Adiv">
//       <Home />
//     </div>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="Adiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}




