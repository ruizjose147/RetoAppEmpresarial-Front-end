import React from 'react'
import { useState } from 'react';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);
    const [esRegistro, setEsRegistro] = useState(true)

    const procesarDatos = e =>{
        e.preventDefault();

        if(!email.trim()){
            //console.log("ingrese email")
            setError("Ingrese un email")
            return
        }

        if(!pass.trim()){
            //console.log('ingrese password')
            setError('ingrese password')
            return
        }
        if(pass.length<6){
            //console.log("pass min 6")
            setError("El password debe ser de minimo 6 caracteres")
        }
        console.log("pasando todas las validaciones")
        setError(null)
    }

  return (
    <div className="mt-5">
        <h3 className="text-center">
            {
                esRegistro ? "Registro Usuario" : "Login de Acceso"
            }
        </h3>
        <hr />
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form onSubmit={procesarDatos}>
                    {
                        error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>   
                        )
                    }
                    <input 
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                    <input 
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                    />
                    <div className="row justify-content-center">
                    <button 
                        className="btn btn-md btn-primary btn-block"
                        type="submit"
                    >
                        {
                            esRegistro ? "Registrarme" : "Ingresar"
                        }
                    </button>
                    <br />
                    <button 
                        className="btn btn-sm btn-info btn-block mt-2"
                        onClick={()=> setEsRegistro(!setEsRegistro)}
                        type="button"
                    >
                        {
                            esRegistro ? "¿Estas Registrado?" : "¿No tienes Cuenta?"
                        }
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login