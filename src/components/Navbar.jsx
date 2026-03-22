import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  z-index: 1000;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: ${props => props.theme === 'dark' ? 'rgba(10, 14, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #0a84ff 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  a {
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme === 'dark' ? '#a0a8c0' : '#4b5563'};

    &:hover {
      color: #0a84ff;
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default function Navbar({ theme, setTheme }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
    <NavContainer
      theme={theme}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Logo onClick={() => scrollToSection("hero")}>JS</Logo>

      <NavLinks>
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            theme={theme}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <a onClick={() => scrollToSection(item.id)}>
              {item.label}
            </a>
          </NavLink>
        ))}
      </NavLinks>

      <ThemeToggle
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Alternar tema"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </ThemeToggle>
    </NavContainer>
  );
}
