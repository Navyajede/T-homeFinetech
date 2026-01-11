import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// pages
import Services from "./pages/Services";
import FinancialTools from "./pages/FinancialTools";
import About from "./pages/About";

/* ================= HOME (LANDING PAGE) ================= */
function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />

      {/* Prevent content from hiding behind fixed navbar */}
      <main className="pt-24">
        <Routes>
          {/* ✅ LANDING PAGE */}
          <Route path="/" element={<Home />} />

          {/* ✅ OTHER PAGES */}
          <Route path="/services" element={<Services />} />
          <Route path="/financial-tools" element={<FinancialTools />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
