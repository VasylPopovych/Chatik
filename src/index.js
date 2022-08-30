import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import firebaseApp from "./common/firebaseApp";
import { getAuth } from "firebase/auth";
import Store from "./store/store";

const store = new Store();

export const Context = createContext({ store });
const firebaseAuth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store, firebaseAuth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
