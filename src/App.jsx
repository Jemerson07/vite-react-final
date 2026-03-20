import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Education from "./components/Education.jsx";
import Numbers from "./components/Numbers.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      {/* Navegação e troca de tema */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* HERO com vídeo neural */}
      <Hero />

      {/* Sobre Mim (trajetória + perfil analítico) */}
      <About />

      {/* Habilidades (com floating animations) */}
      <Skills />

      {/* Projetos (com imagens neon + KPI 3D) */}
      <Projects />

      {/* Serviços (IA + Inovação Corporativa) */}
      <Services />

      {/* Formação (IA, ADS, AWS, Cisco) */}
      <Education />

      {/* Resultados em números */}
      <Numbers />

      {/* Contato (email + LinkedIn + WhatsApp clicável) */}
      <Contact />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
