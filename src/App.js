import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Mmprpg from "./pages/Mmprpg";
import SHOOTER from "./pages/SHOOTER";
import MOBA from "./pages/MOBA";
import ANIME from "./pages/ANIME";
import STRATEGY from "./pages/STRATEGY";
import FANTASY from "./pages/FANTASY";
import SCI_FI from "./pages/SCI_FI";
import RACING from "./pages/RACING";
import FIGHTING from "./pages/FIGHTING";
import SOCIAL from "./pages/SOCIAL";
import GameDataShow from "./pages/GameDataShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MMPRPG" element={<Mmprpg />} />
          <Route path="/SHOOTER" element={<SHOOTER />} />
          <Route path="/MOBA" element={<MOBA />} />
          <Route path="/ANIME" element={<ANIME />} />
          <Route path="/STRATEGY" element={<STRATEGY />} />
          <Route path="/FANTASY" element={<FANTASY />} />
          <Route path="/SCIFI" element={<SCI_FI />} />
          <Route path="/RACING" element={<RACING />} />
          <Route path="/FIGHTING" element={<FIGHTING />} />
          <Route path="/SOCIAL" element={<SOCIAL />} />
          <Route path="/:id" element={<GameDataShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
