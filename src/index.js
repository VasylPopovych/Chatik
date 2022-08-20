import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseApp from "./common/firebaseApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
