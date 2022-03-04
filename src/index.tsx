import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "/store";
import { HashRouter, Switch } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  // <HashRouter>
  //   <Switch>
  //     <App />
  //   </Switch>
  // </HashRouter>,
  document.getElementById("root")
);
