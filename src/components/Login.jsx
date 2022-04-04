import React from 'react'
import { useState } from 'react';
import app, { db } from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; 

const auth = getAuth(app);

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);
    const [esRegistro, setEsRegistro] = useState(true);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(false);

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
            return 
        }

        setError(null)

        if(esRegistro){
            registrar()
        }else{
            login()
        }
    }

    const login =   React.useCallback(async() => {
        
        try {
            const res =await signInWithEmailAndPassword(auth, email, pass);
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)

            navigate("/cajero")

        } catch (error) {
            if(error.code==='auth/invalid-email'){
                setError('Email no valido')  
              }
               if(error.code==='auth/user-not-found'){
                setError('No existe una cuenta asociada al email')
            }
              if(error.code==='auth/wrong-password'){
                  setError('La contraseña es incorrecta')
              }
             
        }
    }, [email, pass, navigate])


    const registrar = React.useCallback(async() => {
        
        try {
            const res = await createUserWithEmailAndPassword(auth, email, pass)
            await addDoc(collection(db, "cajeros"), {
                email: res.user.email,
                uid: res.user.uid
              });
              setEmail('')
              setPass('')
              setError(null)
              navigate("/cajero")
        } catch (error) {
            console.log(error)
            if(error.code==='auth/invalid-email'){
              setError('Email no valido')  
            }
            if(error.code==='auth/email-already-in-use'){
                setError('Ya existe una cuenta con este Email')
            }
            
        }
      },
      [email, pass, navigate],
    )

    const registrarConGoogle = () => {
        try {
            signInWithPopup(auth, googleProvider)
        .then(async (result) => {  
          await setDoc(doc(db, "cajeros", "google"), {
            email: result.user.email,
            uid: result.user.uid,
          });
          navigate("/cajero");
        }).catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
        } catch (error) {
            console.log(error)
        }
        
    }

    const registrarConGitHub = () => {
        
        try {
              signInWithPopup(auth, githubProvider)
       .then(async (result) => {  
         await setDoc(doc(db, "cajeros", "github"), {
           email: result.user.email,
           uid: result.user.uid,
         });
         navigate("/cajero");
       }).catch((error) => {
        console.log(error)
        if(error.code==='auth/invalid-email'){
          setError('Email no valido')  
        }
        if(error.code==='auth/operation-not-allowed'){
            setError('Ya existe una cuenta con este Email')
        }
       });
        } catch (error) {
            console.log(error)
        }
      
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
                    
                        className="btn btn-md btn-primary btn-block mt-2"
                        type="button"
                        onClick={()=>registrarConGoogle()}

                    >
                        <i 
                        className="fa-brands fa-google me-2"
                        ></i>
                        {
                            esRegistro ? "Registrarme Con Google" : "Ingresar Con Google"
                        }
                    </button>
                    <br />
                    <button 
                    
                        className="btn btn-md btn-primary btn-block mt-2"
                        type="button"
                        onClick={()=>registrarConGitHub()}

                    >
                        <i 
                        className="fa-brands fa-github me-2"
                        ></i>
                        {
                            esRegistro ? "Registrarme Con GitHub" : "Ingresar Con GitHub"
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
/*{
    esRegistro ? "¿Estas Registrado?" : "¿No tienes Cuenta?"
    onClick={()=> logConGoogle()}
}*/