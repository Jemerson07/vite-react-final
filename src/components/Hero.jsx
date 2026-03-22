import { motion } from "framer-motion";

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

  // Efeito de partículas flutuantes
  const FloatingParticle = ({ delay, left, top }) => (
    <motion.div
      style={{
        position: "absolute",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "rgba(10, 132, 255, 0.5)",
        left: `${left}%`,
        top: `${top}%`,
        zIndex: 0,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 100 - 50, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay,
      }}
    />
  );

  return (
    <section className="hero" id="hero">
      <video autoPlay muted loop className="video-bg" src="/hero.mp4" />

      {/* Efeito de gradiente animado radial */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(10, 132, 255, 0.15), transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Partículas flutuantes */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.3}
          left={Math.random() * 100}
          top={Math.random() * 100}
        />
      ))}

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge de disponibilidade com glassmorphism */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-block",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "20px",
            background: "rgba(52, 211, 153, 0.15)",
            border: "1px solid rgba(52, 211, 153, 0.4)",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#34d399",
            backdropFilter: "blur(10px)",
          }}
        >
          ✨ Disponível para Novos Projetos
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Tecnologia • IA • Dados • Automação
        </motion.h1>

        <motion.p variants={itemVariants}>
          Transformando processos e decisões com inteligência analítica, inovação
          estratégica e soluções de impacto corporativo.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            💬 Solicitar Projeto
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollToSection("about")}
          >
            Conhecer Trajetória
          </button>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat-item">
            <h3>R$ 400K+</h3>
            <p>Recuperados em Auditorias</p>
          </div>
          <div className="stat-item">
            <h3>5.000+</h3>
            <p>Condutores Gerenciados</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Automações Criadas</p>
          </div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>Dashboards Estratégicos</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
