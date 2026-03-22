import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function ProcessFlow() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      description:
        "Análise profunda do seu negócio, desafios e oportunidades. Entendimento do contexto e objetivos.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Planejamento & Roadmap",
      description:
        "Definição clara de escopo, timeline, entregas e KPIs. Alinhamento de expectativas e recursos.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Implementação Ágil",
      description:
        "Desenvolvimento iterativo com sprints curtos. Feedback contínuo e ajustes em tempo real.",
      icon: "⚙️",
    },
    {
      number: "04",
      title: "Validação & Otimização",
      description:
        "Testes rigorosos, validação de resultados e otimizações finais. Garantia de qualidade.",
      icon: "✅",
    },
    {
      number: "05",
      title: "Entrega & Treinamento",
      description:
        "Transferência de conhecimento, documentação completa e treinamento da equipe.",
      icon: "📚",
    },
    {
      number: "06",
      title: "Suporte & Evolução",
      description:
        "Suporte técnico contínuo, monitoramento de performance e evolução da solução.",
      icon: "🚀",
    },
  ];

  return (
    <section id="process">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Metodologia de Trabalho
      </motion.h2>

      <motion.p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "60px",
          maxWidth: "700px",
          margin: "20px auto 60px",
          lineHeight: "1.6",
          opacity: 0.8,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Minha abordagem combina rigor técnico com flexibilidade estratégica,
        garantindo que cada projeto gere impacto real e sustentável.
      </motion.p>

      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            style={{ position: "relative" }}
          >
            {/* Número do passo */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "20px",
                fontSize: "3rem",
                fontWeight: 900,
                opacity: 0.1,
              }}
            >
              {step.number}
            </div>

            {/* Ícone */}
            <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              {step.icon}
            </div>

            {/* Conteúdo */}
            <h3 style={{ marginBottom: "12px", fontSize: "1.2rem" }}>
              {step.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.8 }}>
              {step.description}
            </p>

            {/* Seta para próximo passo (exceto o último) */}
            {i < steps.length - 1 && (
              <motion.div
                style={{
                  position: "absolute",
                  right: "-40px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.5rem",
                  opacity: 0.3,
                }}
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Benefícios do Processo */}
      <motion.div
        style={{
          marginTop: "80px",
          padding: "40px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(90, 200, 255, 0.05))",
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
          ✨ Resultado Esperado
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
              📊 Impacto Mensurável
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Resultados claros e quantificáveis
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
              ⏱️ Entrega No Prazo
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Cronograma respeitado e comunicação clara
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
              🎯 Qualidade Premium
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Código limpo, documentação completa
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
