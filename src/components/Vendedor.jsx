import React from "react";
import app from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Productos } from "./Productos";
import { Factura } from "./Factura";

const auth = getAuth(app);

const Vendedor = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handlerInventario = () => {
    navigate("/cajero/inventario");
  };

  const handlerFacturas = () => {
    navigate("/cajero/Facturas");
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
      <button
        className="btn btn-primary btn-sm"
        type="button"
        onClick={handlerFacturas}
      >
        Facturas
      </button>
      <div className="container">
        <Routes>
          <Route path="/inventario" element={<Productos />}></Route>
          <Route path="/facturas" element={<Factura/>}></Route>
      </Routes>
      </div>
      
    </div>
  )
};
export default Vendedor;