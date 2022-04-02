import React from 'react'

export const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

  return (
    <div className="mt-5">
        <h3 className="text-center">Accerder o Registrarse</h3>
        <hr />
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form>
                    <input 
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    onChange={e => setPass(e.target.value)}
                    />
                    <button 
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        Registrarse
                    </button>
                    <button 
                        className="btn btn-sm btn-info btn-block"
                        type="button"
                    >
                        ¿Ya estas Registrado?
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login