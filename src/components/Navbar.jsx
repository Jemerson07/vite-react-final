import { motion } from "framer-motion";

export default function Navbar({ theme, setTheme }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={() => scrollToSection("hero")}>
        Jemerson Santos
      </h2>

      <div className="navbar-links">
        <a onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
          Sobre
        </a>
        <a onClick={() => scrollToSection("skills")} style={{ cursor: "pointer" }}>
          Habilidades
        </a>
        <a onClick={() => scrollToSection("projects")} style={{ cursor: "pointer" }}>
          Projetos
        </a>
        <a onClick={() => scrollToSection("services")} style={{ cursor: "pointer" }}>
          Serviços
        </a>
        <a onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>
          Contato
        </a>
      </div>

      <div className="navbar-buttons">
        <button
          className="btn-theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title="Alternar tema"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <a
          href="https://www.linkedin.com/in/jemerson-santos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          LinkedIn
        </a>
      </div>
    </motion.nav>
  );
}
