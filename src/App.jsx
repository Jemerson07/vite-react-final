import { useState, useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Education from "./components/Education.jsx";
import Numbers from "./components/Numbers.jsx";
import Hiring from "./components/Hiring.jsx";
import ProcessFlow from "./components/ProcessFlow.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Benchmark from "./components/Benchmark.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <GlobalStyles />
      
      {/* Navegação com troca de tema */}
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        {/* HERO com vídeo animado e CTA impactante */}
        <Hero />

        {/* Storytelling - A Jornada */}
        <Story />

        {/* Sobre Mim - Trajetória e Perfil Analítico */}
        <About />

        {/* Áreas de Expertise Detalhadas */}
        <Expertise />

        {/* Habilidades - Grid com animações */}
        <Skills />

        {/* Projetos de Impacto */}
        <Projects />

        {/* Serviços Especializados */}
        <Services />

        {/* Depoimentos de Clientes */}
        <Testimonials />

        {/* Por Que Me Contratar */}
        <Hiring />

        {/* Metodologia de Trabalho */}
        <ProcessFlow />

        {/* Formação & Certificações */}
        <Education />

        {/* Resultados em Números */}
        <Numbers />

        {/* Call-to-Action com impacto */}
        <CTA />

        {/* Perguntas Frequentes */}
        <FAQ />

        {/* Benchmark - Comparativo com Melhores */}
        <Benchmark />

        {/* Contato - PJ e Disponibilidade */}
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
