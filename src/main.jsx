import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjBFcepJ4zovZ1XOpKZzlsLMP8tChBDR0",
  authDomain: "tiendadevideojuegos-94bf7.firebaseapp.com",
  projectId: "tiendadevideojuegos-94bf7",
  storageBucket: "tiendadevideojuegos-94bf7.appspot.com",
  messagingSenderId: "1099373035315",
  appId: "1:1099373035315:web:5869f9c393fbfe7ca74846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
        <App />
  </ChakraProvider>
)
