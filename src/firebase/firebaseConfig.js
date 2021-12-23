import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfFIduQyDo6GLNV6cjbFBVfaSpx6V2hsE",
  authDomain: "pokeapi-6e218.firebaseapp.com",
  projectId: "pokeapi-6e218",
  storageBucket: "pokeapi-6e218.appspot.com",
  messagingSenderId: "376571424903",
  appId: "1:376571424903:web:f64721133b20196a05c822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export {app, google, facebook};