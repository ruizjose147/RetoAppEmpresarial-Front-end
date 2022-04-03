import React from "react";
import app from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const auth = getAuth(app);

const Vendedor = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const navegar = React.useEffect(() => {
    if (auth.currentUser) {
      console.log("usuario Logueado");
      setUser(auth.currentUser)
      //navigate("/cajero")
    } else {
      console.log("usuario no Logueado");
      //navigate("/inicio")
    }
  }, [navigate]);

  return (
        <div>
            {
              user !== null ? (
                <h3>{user.email}</h3>
              ):(
                null
              )   
            }
        </div>
  )
};
export default Vendedor;