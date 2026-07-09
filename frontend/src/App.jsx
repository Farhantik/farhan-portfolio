import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Skills />
    </>
  );
}

export default function App() {
  const location = useLocation();
  useScrollReveal();

  return (
    <>
      <div className="bg-decor" aria-hidden="true">
        <span className="bg-grid" />
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <Navbar />
      <main key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <PlaceholderPage
                title="Services"
                description="List what you offer here — web development, UI design, consulting, and so on."
              />
            }
          />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}