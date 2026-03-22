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

  // Partículas flutuantes
  const FloatingParticle = ({ delay, left, top }) => (
    <motion.div
      style={{
        position: "absolute",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "rgba(10, 132, 255, 0.6)",
        left: `${left}%`,
        top: `${top}%`,
        zIndex: 0,
        boxShadow: "0 0 20px rgba(10, 132, 255, 0.8)",
      }}
      animate={{
        y: [0, -150, 0],
        x: [0, Math.random() * 100 - 50, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <section className="hero" id="hero">
      {/* Fundo com gradiente animado (sem vídeo) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10, 14, 39, 1) 0%, rgba(15, 18, 41, 1) 50%, rgba(19, 24, 41, 1) 100%)",
          zIndex: -1,
        }}
      />

      {/* Efeito de gradiente animado radial */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(10, 132, 255, 0.15), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Partículas flutuantes */}
      {[...Array(12)].map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.25}
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
        {/* Badge de disponibilidade */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-block",
            marginBottom: "20px",
            padding: "12px 24px",
            borderRadius: "50px",
            background: "rgba(52, 211, 153, 0.15)",
            border: "1px solid rgba(52, 211, 153, 0.4)",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#34d399",
            backdropFilter: "blur(10px)",
            letterSpacing: "0.5px",
          }}
        >
          ✨ Disponível para Grandes Projetos
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Estrategista em IA, Dados & Automação
        </motion.h1>

        <motion.p variants={itemVariants}>
          Transformo processos complexos em soluções inteligentes. Especializado
          em IA, Business Intelligence e Automação para empresas que buscam
          crescimento exponencial.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            💬 Iniciar Projeto
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollToSection("story")}
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
            <h3>50+</h3>
            <p>Automações Criadas</p>
          </div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>Dashboards Estratégicos</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Anos de Experiência</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
