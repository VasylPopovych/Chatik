import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseApp from "./common/firebaseApp";
import Store from "./store/store";

const store = new Store();

export const Context = createContext({ store });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <FirebaseAppProvider firebaseApp={firebaseApp}>
        <App />
      </FirebaseAppProvider>
    </Context.Provider>
  </React.StrictMode>
);
