import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hiring() {
  const hiringModels = [
    {
      title: "Modelo PJ",
      description: "Contrato de prestação de serviços com flexibilidade total",
      benefits: [
        "Horários flexíveis",
        "Demanda variável",
        "Múltiplos clientes",
        "Autonomia total",
      ],
      icon: "💼",
      highlight: true,
    },
    {
      title: "Projetos Estratégicos",
      description: "Consultoria focada em resultados e impacto mensurável",
      benefits: [
        "Escopo definido",
        "Prazo determinado",
        "Entregáveis claros",
        "ROI garantido",
      ],
      icon: "🎯",
      highlight: false,
    },
    {
      title: "Demanda Pontual",
      description: "Suporte técnico e consultoria de curto prazo",
      benefits: [
        "Flexibilidade máxima",
        "Sem compromisso de longo prazo",
        "Expertise sob demanda",
        "Rápida implementação",
      ],
      icon: "⚡",
      highlight: false,
    },
  ];

  const whyHireMe = [
    {
      title: "Expertise Comprovada",
      description:
        "Mais de 10 anos de experiência em IA, automação e análise de dados com resultados mensuráveis.",
      icon: "🏆",
    },
    {
      title: "Impacto Garantido",
      description:
        "Foco em ROI. Cada projeto é estruturado para gerar economia, eficiência ou crescimento real.",
      icon: "📈",
    },
    {
      title: "Comunicação Clara",
      description:
        "Explico conceitos técnicos complexos de forma simples. Você entende exatamente o que está acontecendo.",
      icon: "💬",
    },
    {
      title: "Parceria Estratégica",
      description:
        "Não sou apenas um executor. Sou um parceiro que pensa no seu negócio como um todo.",
      icon: "🤝",
    },
    {
      title: "Resposta Rápida",
      description:
        "Respondo em até 24 horas. Implementação ágil e iterativa com feedback contínuo.",
      icon: "⚡",
    },
    {
      title: "Suporte Contínuo",
      description:
        "Não desapareço após a entrega. Ofereço suporte, otimizações e evolução contínua.",
      icon: "🔄",
    },
  ];

  return (
    <section id="hiring">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Por Que Me Contratar?
      </motion.h2>

      {/* Modelos de Contratação */}
      <motion.div
        style={{ marginBottom: "80px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "40px", fontSize: "1.8rem" }}>
          Modelos de Trabalho Disponíveis
        </h3>

        <motion.div
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hiringModels.map((model, i) => (
            <motion.div
              key={i}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              style={{
                border: model.highlight
                  ? "2px solid rgba(52, 211, 153, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.12)",
                position: "relative",
              }}
            >
              {model.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "20px",
                    background: "rgba(52, 211, 153, 0.2)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#34d399",
                  }}
                >
                  ⭐ RECOMENDADO
                </div>
              )}
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                {model.icon}
              </div>
              <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
                {model.title}
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "20px", opacity: 0.8 }}>
                {model.description}
              </p>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {model.benefits.map((benefit, j) => (
                  <li key={j} style={{ marginBottom: "8px", fontSize: "0.9rem" }}>
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Por Que Me Contratar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "40px", fontSize: "1.8rem" }}>
          Diferenciais & Vantagens
        </h3>

        <motion.div
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyHireMe.map((reason, i) => (
            <motion.div
              key={i}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                {reason.icon}
              </div>
              <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", opacity: 0.8 }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
