import React from "react";
import "./assets/styles/sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Apropos from "./pages/Apropos";
import Error404 from "./pages/pageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
