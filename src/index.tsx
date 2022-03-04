import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "./store";
import "./assets/font/NotoSans-Bold.ttf";
import "./assets/font/NotoSans-BoldItalic.ttf";
import "./assets/font/NotoSans-Italic.ttf";
import "./assets/font/NotoSans-Regular.ttf";

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
