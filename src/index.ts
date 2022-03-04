import ReactDOM from "react-dom";
import "./style/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { StrictMode } from "react";
import { StoreProvider } from "./store";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
