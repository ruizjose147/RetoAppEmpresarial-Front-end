import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
//Switch === Routes en la v6
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<div>inicio... </div>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/cajero" element={<div>cajero...  </div>}>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
