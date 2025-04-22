import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Kitchen } from "./pages/Kitchen";
import { Bar } from "./pages/Bar";
import { History } from "./pages/History";
import { DefaultLaytout } from "./layouts/defaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLaytout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cozinha" element={<Kitchen />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/historico" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
