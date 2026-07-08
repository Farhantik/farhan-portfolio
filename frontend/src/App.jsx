import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

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
  return (
    <>
      <Navbar />
      <main>
        <Routes>
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
