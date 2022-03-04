import { HashRouter, Route, Routes } from "react-router-dom";
import * as Layout from "./layouts";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./page/Index/index";
import Intro from "./page/Intro";
import Search from "./page/Search";
import NotFound from "./page/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<Layout.Default />} />
            <Route index element={Index} />
            <Route path="/search" element={Search} />
            <Route path="/intro" element={Intro} />
            <Route path="*" element={NotFound} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
