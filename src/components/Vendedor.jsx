import React from "react";
import app from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Productos } from "./Productos";

const auth = getAuth(app);

const Vendedor = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handlerInventario = () => {
    navigate("/cajero/inventario");
  };

  return (
    <div>
      
      <br />
      <button
        className="btn btn-primary btn-sm"
        type="button"
        onClick={handlerInventario}
      >
        Inventario
      </button>
      <Routes>
        <Route path="/inventario" element={<Productos />}></Route>
      </Routes>
    </div>
  )
};
export default Vendedor;

/*{
  user !== null ? (
    <h3>{user.email}</h3>
  ) : (
    null
  )
}*/