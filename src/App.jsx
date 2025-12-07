import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPageToshiba from "./LandingPageToshiba";
import LandingPageKiriazi from "./LandingPageKiriazi";
import LandingPageZonasi from "./LandingPageZonasi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageToshiba />} />
        <Route path="/kiriazi" element={<LandingPageKiriazi />} />
        <Route path="/zonasi" element={<LandingPageZonasi />} />
      </Routes>
    </BrowserRouter>
  );
}
