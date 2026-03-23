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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Story() {
  const chapters = [
    {
      year: "2018-2020",
      title: "O Início: Análise Operacional & Processos",
      description:
        "Iniciei minha trajetória focando em entender como as operações de negócio funcionam. Identifiquei os primeiros gargalos e comecei a aplicar lógica de sistemas para otimizar fluxos manuais.",
      icon: "🌱",
      color: "#8b5cf6",
    },
    {
      year: "2020-2022",
      title: "Evolução: Dados & Gestão Estratégica",
      description:
        "Atuei na SEINFRA com foco em Gestão de Frotas e Operações. Foi onde consolidei minha capacidade de transformar dados operacionais em indicadores de performance (KPIs) e dashboards de suporte à decisão.",
      icon: "⚙️",
      color: "#0a84ff",
    },
    {
      year: "2022-2024",
      title: "Especialização: Automação & IA Aplicada",
      description:
        "Aprofundei em Python e ferramentas de IA para criar automações reais. Desenvolvi soluções que reduziram erros e ganharam escala, unindo o conhecimento acadêmico (ADS, AWS e Cisco) com a prática de mercado.",
      icon: "🤖",
      color: "#34d399",
    },
    {
      year: "2024-2025",
      title: "Impacto: Execução Técnica & Apresentação",
      description:
        "Atualmente na LM Mobilidade, foco em aplicar IA de forma estratégica. Realizo demonstrações técnicas (DDS) mostrando na prática como a tecnologia resolve problemas de eficiência e custo em tempo real.",
      icon: "🚀",
      color: "#ec4899",
    },
    {
      year: "2026 em Diante",
      title: "Visão: Liderança em Inovação Digital",
      description:
        "Focado em expandir o impacto da IA nas operações brasileiras. Minha visão é liderar projetos de transformação digital que unam inteligência analítica com resultados financeiros exponenciais.",
      icon: "🌟",
      color: "#06b6d4",
    },
  ];

  return (
    <section id="story">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        A Jornada: 6 Anos de Evolução e Impacto
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
        Minha trajetória é marcada pela transição da operação para a inteligência. 
        Ao longo de 6 anos, refinei minha capacidade de identificar ineficiências e 
        construir soluções tecnológicas que geram valor real e imediato.
      </motion.p>

      <motion.div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Linha vertical da timeline */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, rgba(10, 132, 255, 0.3), rgba(52, 211, 153, 0.3))",
            transform: "translateX(-50%)",
          }}
        />

        {/* Capítulos da história */}
        {chapters.map((chapter, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{
              marginBottom: "60px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Conteúdo alternado */}
            {i % 2 === 0 ? (
              <>
                {/* Esquerda */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    padding: "30px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${chapter.color}15, ${chapter.color}08)`,
                    border: `1px solid ${chapter.color}30`,
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                    {chapter.icon}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: chapter.color,
                      marginBottom: "10px",
                    }}
                  >
                    {chapter.year}
                  </p>
                  <h3 style={{ marginBottom: "12px", fontSize: "1.3rem" }}>
                    {chapter.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.8 }}>
                    {chapter.description}
                  </p>
                </motion.div>

                {/* Direita vazia */}
                <div />
              </>
            ) : (
              <>
                {/* Esquerda vazia */}
                <div />

                {/* Direita */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    padding: "30px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${chapter.color}15, ${chapter.color}08)`,
                    border: `1px solid ${chapter.color}30`,
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                    {chapter.icon}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: chapter.color,
                      marginBottom: "10px",
                    }}
                  >
                    {chapter.year}
                  </p>
                  <h3 style={{ marginBottom: "12px", fontSize: "1.3rem" }}>
                    {chapter.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.8 }}>
                    {chapter.description}
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
