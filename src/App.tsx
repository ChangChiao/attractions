import { HashRouter, Route, Routes } from "react-router-dom";
import * as Layout from "./layouts";
import Index from "./page/Index/index";
import Intro from "./page/Intro";
import Search from "./page/Search";
import NotFound from "./page/NotFound";
import { ToastContainer } from "react-toastify";
import { ResetStyle, GlobalStyle, ButtonStyle, TitleStyle } from "./style";
function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <ButtonStyle />
      <TitleStyle />
      <HashRouter>
        <Routes>
          <Route element={<Layout.Default />}>
            <Route index element={Index} />
            <Route path="/search" element={Search} />
            <Route path="/intro" element={Intro} />
            <Route path="*" element={NotFound} />
          </Route>
        </Routes>
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
