import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 80px;
  overflow: hidden;
  padding: 64px 24px;
  background: linear-gradient(135deg, rgba(10, 14, 39, 1) 0%, rgba(15, 18, 41, 1) 50%, rgba(19, 24, 41, 1) 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(10, 132, 255, 0.15), transparent 70%);
    z-index: 0;
    animation: pulse 5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 900px;
  text-align: center;
`;

const Badge = styled(motion.div)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 12px 24px;
  border-radius: 50px;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.4);
  font-size: 0.9rem;
  font-weight: 600;
  color: #34d399;
  backdrop-filter: blur(10px);
  letter-spacing: 0.5px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  color: #a0a8c0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: -0.01em;

  ${props => props.primary ? `
    background: linear-gradient(135deg, #0a84ff 0%, #34d399 100%);
    color: white;
    box-shadow: 0 20px 40px rgba(10, 132, 255, 0.3);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 30px 60px rgba(10, 132, 255, 0.4);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const StatItem = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #0a84ff 0%, #34d399 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
    color: #a0a8c0;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="hero">
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Badge variants={itemVariants}>
          ✨ Disponível para Grandes Projetos
        </Badge>

        <HeroTitle variants={itemVariants}>
          Estrategista em IA, Dados & Automação
        </HeroTitle>

        <HeroSubtitle variants={itemVariants}>
          Transformo processos complexos em soluções inteligentes. Especializado
          em IA, Business Intelligence e Automação para empresas que buscam
          crescimento exponencial.
        </HeroSubtitle>

        <HeroButtons variants={itemVariants}>
          <Button
            primary
            onClick={() => scrollToSection("contact")}
          >
            💬 Iniciar Projeto
          </Button>
          <Button
            onClick={() => scrollToSection("story")}
          >
            Conhecer Trajetória
          </Button>
        </HeroButtons>

        <HeroStats variants={itemVariants}>
          <StatItem>
            <h3>R$ 400K+</h3>
            <p>Recuperados em Auditorias</p>
          </StatItem>
          <StatItem>
            <h3>50+</h3>
            <p>Automações Criadas</p>
          </StatItem>
          <StatItem>
            <h3>30+</h3>
            <p>Dashboards Estratégicos</p>
          </StatItem>
          <StatItem>
            <h3>10+</h3>
            <p>Anos de Experiência</p>
          </StatItem>
        </HeroStats>
      </HeroContent>
    </HeroSection>
  );
}
