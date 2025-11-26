import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hakkimizda from "./pages/Hakkimizda";
import Faaliyetler from "./pages/Faaliyetler";
import Galeri from "./pages/Galeri";
import Iletisim from "./pages/Iletisim";

import Ortaklarimiz from "./pages/Ortaklarimiz";
import Haberlerimiz from "./pages/Haberlerimiz";
import Duyurularimiz from "./pages/Duyurularimiz";
import HaberDetay from "./pages/HaberDetay";
import YonetimKurulu from "./pages/YonetimKurulu";
import DenetimKurulu from "./pages/DenetimKurulu";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Kurumsal */}
            <Route path="/kurumsal/hakkimizda" element={<Hakkimizda />} />
            <Route path="/kurumsal/yonetim-kurulu" element={<YonetimKurulu />} />
            <Route path="/kurumsal/denetim-kurulu" element={<DenetimKurulu />} />

            <Route path="/kurumsal/ortaklarimiz" element={<Ortaklarimiz />} />

            {/* Faaliyetler */}
            <Route path="/faaliyetler" element={<Faaliyetler />} />

            {/* Medya Odası */}
            <Route path="/medya/haberlerimiz" element={<Haberlerimiz />} />
            <Route path="/medya/duyurularimiz" element={<Duyurularimiz />} />
            <Route path="/medya/galeri" element={<Galeri />} />

            {/* İletişim */}
            <Route path="/iletisim" element={<Iletisim />} />

            <Route path="/haber/:id" element={<HaberDetay />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
