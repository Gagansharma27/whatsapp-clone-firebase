import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdJqPaSOSh27f6gVUgGGzvRMz3NuTocYQ",
    authDomain: "whatsapp-clone-5e49f.firebaseapp.com",
    projectId: "whatsapp-clone-5e49f",
    storageBucket: "whatsapp-clone-5e49f.appspot.com",
    messagingSenderId: "907633325338",
    appId: "1:907633325338:web:a97f13279c30ee99bea8a3",
    measurementId: "G-PLCSS7PXM7"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();

  const auth  = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;

 