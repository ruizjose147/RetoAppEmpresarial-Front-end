import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD6rTJjOneTQxVPGEOKQeNbKymZfb0TBic",
    authDomain: "reto-app-empresarial.firebaseapp.com",
    projectId: "reto-app-empresarial",
    storageBucket: "reto-app-empresarial.appspot.com",
    messagingSenderId: "804341926488",
    appId: "1:804341926488:web:a7ae42f0e79c3f50a9182d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);  
  
  const db =app.firestore();
  const auth = app.auth();

  export { db, auth};