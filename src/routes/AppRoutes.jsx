import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHome from "../pages/MainHome";
import AttarPage from "../pages/AttarPage";
import GemstonePage from "../pages/GemstonePage";
import RudrakshPage from "../pages/RudrakshPage";
import NewLaunches from "../components/common/NewLaunches";
import OurStory from "../components/common/OurStory";
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainHome />} />

        <Route path="/attar" element={<AttarPage />} />

        <Route path="/gemstone" element={<GemstonePage />} />

        <Route path="/rudraksh" element={<RudrakshPage />} />
<Route path="/new-launches" element={<NewLaunches />} />
<Route path="/our-story" element={<OurStory />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;