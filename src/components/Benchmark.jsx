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

export default function Benchmark() {
  const portfolios = [
    {
      name: "Portfólio Tradicional",
      description: "Portfólio estático com descrição de experiências",
      features: [
        { feature: "Storytelling", status: false },
        { feature: "Animações Avançadas", status: false },
        { feature: "Temas Dinâmicos", status: false },
        { feature: "Impacto Quantificado", status: false },
        { feature: "Modelo PJ Destacado", status: false },
        { feature: "Metodologia Transparente", status: false },
        { feature: "Comparativo de Mercado", status: false },
        { feature: "Call-to-Action Estratégico", status: false },
        { feature: "Performance Otimizada", status: false },
      ],
      icon: "📄",
      color: "#a0a0a0",
    },
    {
      name: "Portfólio Padrão (Wix/Squarespace)",
      description: "Portfólio genérico com templates prontos",
      features: [
        { feature: "Storytelling", status: false },
        { feature: "Animações Avançadas", status: true },
        { feature: "Temas Dinâmicos", status: false },
        { feature: "Impacto Quantificado", status: false },
        { feature: "Modelo PJ Destacado", status: false },
        { feature: "Metodologia Transparente", status: false },
        { feature: "Comparativo de Mercado", status: false },
        { feature: "Call-to-Action Estratégico", status: false },
        { feature: "Performance Otimizada", status: false },
      ],
      icon: "🎨",
      color: "#0a84ff",
    },
    {
      name: "Portfólio Premium (Behance/Dribbble)",
      description: "Portfólio focado em design e criatividade",
      features: [
        { feature: "Storytelling", status: true },
        { feature: "Animações Avançadas", status: true },
        { feature: "Temas Dinâmicos", status: false },
        { feature: "Impacto Quantificado", status: false },
        { feature: "Modelo PJ Destacado", status: false },
        { feature: "Metodologia Transparente", status: false },
        { feature: "Comparativo de Mercado", status: false },
        { feature: "Call-to-Action Estratégico", status: true },
        { feature: "Performance Otimizada", status: false },
      ],
      icon: "✨",
      color: "#fb923c",
    },
    {
      name: "Jemerson Santos",
      description: "Portfólio estratégico com impacto de negócio",
      features: [
        { feature: "Storytelling", status: true },
        { feature: "Animações Avançadas", status: true },
        { feature: "Temas Dinâmicos", status: true },
        { feature: "Impacto Quantificado", status: true },
        { feature: "Modelo PJ Destacado", status: true },
        { feature: "Metodologia Transparente", status: true },
        { feature: "Comparativo de Mercado", status: true },
        { feature: "Call-to-Action Estratégico", status: true },
        { feature: "Performance Otimizada", status: true },
      ],
      icon: "🚀",
      color: "#34d399",
      highlight: true,
    },
  ];

  return (
    <section id="benchmark">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Por Que Este Portfólio Se Destaca
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
        Comparação com os melhores portfólios do mercado. Este não é apenas um
        portfólio bonito — é uma ferramenta estratégica de negócio.
      </motion.p>

      <motion.div
        className="grid-2"
        style={{ maxWidth: "1400px", margin: "0 auto", gap: "20px" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolios.map((portfolio, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            style={{
              borderRadius: "16px",
              padding: "30px",
              background: portfolio.highlight
                ? "linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(52, 211, 153, 0.05))"
                : "rgba(255, 255, 255, 0.05)",
              border: portfolio.highlight
                ? "2px solid rgba(52, 211, 153, 0.5)"
                : "1px solid rgba(255, 255, 255, 0.12)",
              position: "relative",
            }}
          >
            {portfolio.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
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
              {portfolio.icon}
            </div>

            <h3 style={{ marginBottom: "8px", fontSize: "1.3rem" }}>
              {portfolio.name}
            </h3>

            <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "25px" }}>
              {portfolio.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {portfolio.features.map((item, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: item.status ? "#34d399" : "#a0a0a0",
                    }}
                  >
                    {item.status ? "✓" : "✗"}
                  </span>
                  <span style={{ opacity: item.status ? 1 : 0.5 }}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Diferenciais Principais */}
      <motion.div
        style={{
          marginTop: "80px",
          padding: "40px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(90, 200, 255, 0.05))",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "30px", fontSize: "1.5rem", textAlign: "center" }}>
          🎯 Diferenciais Estratégicos
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              1️⃣ Storytelling Narrativo
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Não apenas listar experiências. Contar a história de evolução e
              aprendizado que levou à maestria.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              2️⃣ Impacto Quantificado
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Não apenas "fiz automação". Mostro resultados reais: redução de erros operacionais e ganho de eficiência mensurável em tempo real.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              3️⃣ Transparência de Modelo
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Deixa claro: disponível para PJ, projetos estratégicos e demanda
              pontual. Sem ambiguidade.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              4️⃣ Metodologia Visível
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Mostra exatamente como você trabalha: diagnóstico, planejamento,
              implementação, validação, suporte.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              5️⃣ Experiência Premium
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Animações suaves, glassmorphism, temas dinâmicos. A experiência
              reflete a qualidade do trabalho.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
              6️⃣ Foco em Conversão
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              CTAs estratégicos em múltiplos pontos. Cada seção leva a uma ação
              clara: "Solicitar Projeto".
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
