import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Sobre", id: "story" },
    { label: "Expertise", id: "expertise" },
    { label: "Projetos", id: "projects" },
    { label: "Serviços", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">JS</div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <a onClick={() => scrollToSection(item.id)}>
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <motion.button
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Alternar tema"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </motion.button>
    </motion.nav>
  );
}
