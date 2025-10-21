import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CoffeesPage } from "./components/CoffeesPage";
import { AboutPage } from "./components/AboutPage";
import { YirgacheffePage } from "./components/YirgacheffePage";
import { SidamaPage } from "./components/SidamaPage";
import { GujiPage } from "./components/GujiPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coffees" element={<CoffeesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/coffees/yirgacheffe" element={<YirgacheffePage />} />
            <Route path="/coffees/sidama" element={<SidamaPage />} />
            <Route path="/coffees/guji" element={<GujiPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
