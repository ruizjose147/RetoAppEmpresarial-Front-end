import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Login from './Login'

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Ferreteria Raul</Link>
        <div>
            <div className="d-flex">
                <NavLink className="btn btn-primary mr-2" to="/">
                    Inicio
                </NavLink>
                <NavLink className="btn btn-primary mr-2" to="/admin">
                    Cajero
                </NavLink>
                <NavLink className="btn btn-primary mr-2" to="/login">
                    Login
                </NavLink>
            </div>
        </div>
    </div>
  )
}
