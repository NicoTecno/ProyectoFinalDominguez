import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByW1jLH8vkwiRLPzcXVdx5zcWXUWJ-X_I",
  authDomain: "nicotech-8fdb5.firebaseapp.com",
  projectId: "nicotech-8fdb5",
  storageBucket: "nicotech-8fdb5.appspot.com",
  messagingSenderId: "224109717972",
  appId: "1:224109717972:web:69f9570f69c343cb534e41",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
