import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Hakkimizda from "./pages/Hakkimizda";
import Home from "./pages/Home";
import ConciergeHizmeti from "./pages/ConciergeHizmeti";
import EnerjiYonetimi from "./pages/EnerjiYonetimi";
import Iletisim from "./pages/Iletisim";
import Mevzuat from "./pages/Mevzuat";
import Misyonumuz from "./pages/Misyonumuz";
import Ilkelerimiz from "./pages/Ilkelerimiz";
import Vizyonumuz from "./pages/Vizyonumuz";
import YonetimHizmetleri from "./pages/YonetimHizmetleri";
import YonetimTakimi from "./pages/YonetimTakimi";
import TeknikIsletimHizmetleri from "./pages/TeknikIsletimHizmetleri";
import Referanslarimiz from "./pages/Referanslarimiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hakkimizda" element={<Hakkimizda />} />
          <Route path="/Concierge-Hizmeti" element={<ConciergeHizmeti />} />
          <Route path="/Enerji-Yonetimi" element={<EnerjiYonetimi />} />
          <Route path="/Iletisim" element={<Iletisim />} />
          <Route path="/Mevzuat" element={<Mevzuat/>} />
          <Route path="/Ilkelerimiz" element={<Ilkelerimiz />} />
          <Route path="/Misyonumuz" element={<Misyonumuz/>} />
          <Route path="/Vizyonumuz" element={<Vizyonumuz/>} />
          <Route path="/Yonetim-Hizmetleri" element={<YonetimHizmetleri/>} />
          <Route path="/Yonetim-Takimi" element={<YonetimTakimi/>} />
          <Route path="/Teknik-Isletim-Hizmetleri" element={<TeknikIsletimHizmetleri/>} />
          <Route path="/Referanslarimiz" element={<Referanslarimiz/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
