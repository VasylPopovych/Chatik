import { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import { Context } from ".";
import { chatsData } from "./store/chatsData";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!localStorage.chatsData) {
      localStorage.setItem("chatsData", JSON.stringify(chatsData));
    }
    store.setDataToStorage();
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
