import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import Vendedor from "./components/Vendedor";
import app from './firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

//Switch === Routes en la v6
function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <Router>
          <div className="container">
          <Navbar firebaseUser={firebaseUser} />
          <div>
            <Vendedor />
          </div>
          <Routes>
            <Route path="/" element={<div>inicio... </div>}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route 
              path="/cajero" element={
                  <div>
                    <h3>{auth.email}</h3>
                  </div>
            }>
            </Route>
          </Routes>
        </div>
    </Router>

  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default App;


//{<p>Cargando....</p>}

