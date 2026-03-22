import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  border-bottom: 1px solid ${props => props.theme === 'dark' ? 'rgba(137, 207, 240, 0.1)' : 'rgba(137, 207, 240, 0.2)'};
  background: ${props => props.theme === 'dark' ? 'rgba(5, 10, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    height: 60px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  a {
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${props => props.theme === 'dark' ? 'rgba(240, 247, 250, 0.7)' : 'rgba(5, 10, 31, 0.7)'};

    &:hover {
      color: var(--baby-blue);
      transform: translateY(-2px);
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(137, 207, 240, 0.2);
  background: rgba(137, 207, 240, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  color: var(--baby-blue);
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background: rgba(137, 207, 240, 0.15);
    border-color: var(--baby-blue);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Expertise", id: "skills" },
    { label: "Educação", id: "education" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <NavContainer
      theme={theme}
      style={{ height: scrolled ? '70px' : '90px' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Logo onClick={() => scrollToSection("home")}>Jemerson</Logo>

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
        title="Alternar Tema"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </ThemeToggle>
    </NavContainer>
  );
}
