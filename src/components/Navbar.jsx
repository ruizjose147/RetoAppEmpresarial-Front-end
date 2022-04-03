import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from '../firebase/firebase';

const auth = getAuth(app);

export const Navbar = (props) => {

    const navigate = useNavigate();

    const cerrarSecion = () => {
        auth.signOut()
            .then(() => {
                navigate("/login")
            })
    }

  return (
    <div className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Ferreteria Raul</Link>
        <div>
            <div className="d-flex">
                <NavLink className="btn btn-primary mr-2" to="/">
                    Inicio
                </NavLink>
                {
                    props.firebaseUser !== null ? (
                        <NavLink className="btn btn-primary mr-2" to="/cajero">
                            Cajero
                        </NavLink>
                    ):(
                        null
                    )
                }
                
                {
                    props.firebaseUser !== null ? (
                        <button 
                            className="btn btn-primary mr-2"
                            onClick={()=> cerrarSecion()}
                        >
                            Cerrar Seción
                        </button>
                    ):(
                       <NavLink className="btn btn-primary mr-2" to="/login">
                            Login
                        </NavLink> 
                    )
                }
                
            </div>
        </div>
    </div>
  )
}
