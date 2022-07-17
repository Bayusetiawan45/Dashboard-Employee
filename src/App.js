import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
    </>
  );
}

export default App;
