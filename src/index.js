import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCv4n5Csb_LNkgX992GaGgWpPn7T_wUi8",
  authDomain: "ecommerce-reactjs-c0f2e.firebaseapp.com",
  projectId: "ecommerce-reactjs-c0f2e",
  storageBucket: "ecommerce-reactjs-c0f2e.appspot.com",
  messagingSenderId: "480737047862",
  appId: "1:480737047862:web:ff60247c31b1a39d1a2f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
