import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import DefaultTemp from "./components/DefaultTemp.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./page/Index/index";
import Intro from "./page/Intro";
import Search from "./page/Search";
import { ToastContainer } from "react-toastify";
import "./assets/font/NotoSans-Bold.ttf";
import "./assets/font/NotoSans-BoldItalic.ttf";
import "./assets/font/NotoSans-Italic.ttf";
import "./assets/font/NotoSans-Regular.ttf";
import { HashRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <DefaultTemp>
          <ScrollToTop>
            <Route path="/" exact component={Index} />
            <Route path="/search" exact component={Search} />
            <Route path="/intro" component={Intro} />
          </ScrollToTop>
        </DefaultTemp>
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
