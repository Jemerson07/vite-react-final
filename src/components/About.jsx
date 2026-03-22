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

export default function About() {
  const highlights = [
    {
      icon: "🎯",
      title: "Foco em Impacto",
      description: "Cada projeto é estruturado para gerar ROI mensurável e crescimento real.",
    },
    {
      icon: "🚀",
      title: "Inovação Contínua",
      description: "Sempre à frente das tendências em IA, automação e transformação digital.",
    },
    {
      icon: "💼",
      title: "Experiência Corporativa",
      description: "Trabalho com empresas Fortune 500 e startups de alto crescimento.",
    },
    {
      icon: "🤝",
      title: "Parceria Estratégica",
      description: "Não sou executor. Sou um parceiro que pensa no seu negócio.",
    },
  ];

  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Quem Sou
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "80px" }}>
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
            Sou um especialista em <strong>IA, Dados e Automação</strong> com mais de 10 anos de experiência transformando processos complexos em soluções inteligentes.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
            Meu diferencial? <strong>Combino expertise técnica com visão estratégica</strong> para gerar impacto real nos negócios. Não implemento soluções genéricas — crio estratégias personalizadas que geram crescimento exponencial.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
            Trabalho com empresas que buscam <strong>transformação digital genuína</strong>, não apenas ferramentas. Meu compromisso é claro: <strong>resultados mensuráveis em tempo definido</strong>.
          </p>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <span className="badge">IA & Machine Learning</span>
            <span className="badge">Business Intelligence</span>
            <span className="badge">Automação RPA</span>
            <span className="badge">Consultoria Estratégica</span>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1rem", marginBottom: "8px", fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.5" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Disponibilidade */}
      <motion.div
        style={{
          padding: "40px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(52, 211, 153, 0.1))",
          border: "1px solid rgba(10, 132, 255, 0.2)",
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "15px", fontSize: "1.3rem" }}>
          💼 Disponibilidade & Modelos de Trabalho
        </h3>
        <p style={{ fontSize: "1rem", marginBottom: "20px", opacity: 0.9 }}>
          Trabalho com <strong>Modelo PJ</strong>, <strong>Projetos Estratégicos</strong> e <strong>Demanda Pontual</strong>. Flexibilidade total para se adequar às suas necessidades.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "8px" }}>⚡ Tempo de Resposta</p>
            <p style={{ opacity: 0.8 }}>Até 24 horas</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "8px" }}>🎯 Foco</p>
            <p style={{ opacity: 0.8 }}>Impacto & ROI</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "8px" }}>📊 Metodologia</p>
            <p style={{ opacity: 0.8 }}>Ágil & Iterativa</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
