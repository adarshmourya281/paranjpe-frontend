import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHome from "../pages/MainHome";
import AttarPage from "../pages/AttarPage";
import GemstonePage from "../pages/GemstonePage";
import RudrakshPage from "../pages/RudrakshPage";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainHome />} />

        <Route path="/attar" element={<AttarPage />} />

        <Route path="/gemstone" element={<GemstonePage />} />

        <Route path="/rudraksh" element={<RudrakshPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;