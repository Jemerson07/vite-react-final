import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --dark-bg: #0a0e27;
    --dark-text: #ffffff;
    --dark-text-secondary: #a0a8c0;
    --light-bg: #ffffff;
    --light-text: #0a0e27;
    --light-text-secondary: #4b5563;
    --accent-primary: #0a84ff;
    --accent-secondary: #34d399;
    --gradient-primary: linear-gradient(135deg, #0a84ff 0%, #34d399 100%);
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    padding: 64px 24px;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  section h2 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 32px;
    letter-spacing: -0.02em;
    line-height: 1.1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  section h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  section p {
    font-size: 1rem;
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
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    section {
      padding: 32px 16px;
    }

    section h2 {
      font-size: 2.5rem;
    }
  }
`;
