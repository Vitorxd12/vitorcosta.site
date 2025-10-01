import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Horarios from "./pages/Horarios";
import Index from "./pages";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/horariosIFS" element={<Horarios local={'ifs'}/>} />
              <Route path="/horariosUFS" element={<Horarios local={'ufs'}/>} />
          </Routes>
      </Router>
  );
}

export default App;
