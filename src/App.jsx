import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/login" element={<div>login...  </div>}>
          </Route>
          <Route path="/admin" element={<div>admin...  </div>}>
   
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
