import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Cores Dark Mode (Azul Bebê & Dark) */
    --dark-bg: #050a1f; /* Azul escuro profundo */
    --dark-text: #f0f7ff; /* Branco levemente azulado */
    --dark-text-secondary: #a0c4ff; /* Azul bebê para textos secundários */
    
    /* Cores Light Mode (Azul Bebê & White) */
    --light-bg: #ffffff;
    --light-text: #050a1f;
    --light-text-secondary: #4a90e2; /* Azul para textos secundários */
    
    /* Acentos (Azul Bebê & Azul Profundo) */
    --accent-primary: #89cff0; /* Azul Bebê */
    --accent-secondary: #0047ab; /* Azul Cobalto/Profundo */
    --gradient-primary: linear-gradient(135deg, #89cff0 0%, #0047ab 100%);
    --baby-blue: #89cff0;
    --deep-blue: #050a1f;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .dark {
    background: var(--dark-bg);
    color: var(--dark-text);
  }

  .light {
    background: var(--light-bg);
    color: var(--light-text);
  }

  section {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  section h2 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 40px;
    letter-spacing: -0.02em;
    line-height: 1.1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  section h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  section p {
    font-size: 1.125rem;
    line-height: 1.8;
  }

  .dark section p {
    color: var(--dark-text-secondary);
  }

  .light section p {
    color: var(--light-text-secondary);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  /* Glassmorphism effects */
  .glass {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
  }

  .light .glass {
    background: rgba(137, 207, 240, 0.05);
    border: 1px solid rgba(137, 207, 240, 0.1);
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 20px;
    }
    section h2 {
      font-size: 2.5rem;
    }
  }
`;
