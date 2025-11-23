import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Solution from "./pages/Solution";
import { PowerRoomLanding } from "./pages/PowerRoomLanding";
import { PricingPage } from "./pages/Pricing";
import { Blog } from "./pages/Blog";
import { UseCase } from "./pages/UseCase";
import { LandDLeader } from "./pages/LandDLeader";
import { HRLeader } from "./pages/HRLeader";
import { EstablishedLeader } from "./pages/EstablishedLeader";
import { EmergingAndRisingLeader } from "./pages/EnergingAndRisingLeader";
import LoginPage from "./pages/Login";
import StoryDetail from "./components/UseCase/StoryDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieSettings from "./pages/CookieSettings";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ❗ Login WITHOUT layout */}
        <Route path="/login" element={<LoginPage />} />

        {/* 🌟 All other routes WITH layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<PowerRoomLanding />} />
                <Route path="/home" element={<PowerRoomLanding />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/use-case" element={<UseCase />} />
                <Route path="/landleader" element={<LandDLeader />} />
                <Route path="/hrleader" element={<HRLeader />} />
                <Route path="/establishedleader" element={<EstablishedLeader />} />
                <Route path="/emergingandrisingleader" element={<EmergingAndRisingLeader />} />
                <Route path="/story/:id" element={<StoryDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-settings" element={<CookieSettings />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
