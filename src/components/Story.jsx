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
      year: "2014-2018",
      title: "O Começo: Descobrindo a Tecnologia",
      description:
        "Iniciei minha carreira com curiosidade genuína sobre como a tecnologia poderia resolver problemas reais. Comecei a estudar programação e análise de dados, percebendo que o verdadeiro valor estava em transformar dados em decisões.",
      icon: "🌱",
      color: "#8b5cf6",
    },
    {
      year: "2018-2020",
      title: "Aprendizado Prático: Operações & Automação",
      description:
        "Trabalhei em operações complexas onde identifiquei processos repetitivos que desperdiçavam tempo e recursos. Comecei a automatizar tarefas, reduzindo custos em até 40% e aumentando a eficiência operacional.",
      icon: "⚙️",
      color: "#0a84ff",
    },
    {
      year: "2020-2022",
      title: "Especialização: IA & Análise Estratégica",
      description:
        "Aprofundei meus conhecimentos em Machine Learning e Business Intelligence. Desenvolvi dashboards estratégicos que transformaram dados brutos em insights acionáveis para executivos. Cada projeto gerava impacto mensurável.",
      icon: "🤖",
      color: "#34d399",
    },
    {
      year: "2022-2024",
      title: "Maestria: Consultoria & Transformação Digital",
      description:
        "Evoluí para consultoria estratégica, ajudando empresas a transformar seus processos digitalmente. Recuperei R$ 400K+ em auditorias, implementei 50+ automações e criei 30+ dashboards estratégicos. Cada cliente, um novo desafio.",
      icon: "🏆",
      color: "#fb923c",
    },
    {
      year: "2024-2025",
      title: "Visão: Impacto Exponencial com IA",
      description:
        "Combino expertise técnica com visão estratégica. Meu foco é ajudar empresas a alcançar crescimento exponencial através de IA, automação inteligente e decisões baseadas em dados. Cada projeto é uma oportunidade de gerar impacto real.",
      icon: "🚀",
      color: "#ec4899",
    },
    {
      year: "2026 em Diante",
      title: "Futuro: Liderança em Transformação Digital",
      description:
        "Expandindo atuação como estrategista de IA e transformação digital. Focado em parcerias com grandes empresas, implementação de soluções escaláveis e mentoria de talentos. Visão: ser referência em inovação e impacto estratégico no Brasil.",
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
        A Jornada: De Curiosidade a Maestria
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
        Minha trajetória não é apenas sobre acumular experiências. É sobre
        evolução constante, aprendizado profundo e geração de impacto real em
        cada projeto que abraço.
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

      {/* Filosofia */}
      <motion.div
        style={{
          marginTop: "80px",
          padding: "40px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(90, 200, 255, 0.05))",
          textAlign: "center",
          maxWidth: "800px",
          margin: "80px auto 0",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
          💡 Minha Filosofia
        </h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.8", opacity: 0.9 }}>
          <strong>Não acredito em soluções genéricas.</strong> Cada negócio é
          único, cada desafio é diferente. Meu compromisso é entender
          profundamente seu contexto, sua visão e seus objetivos para criar
          soluções que não apenas resolvem problemas, mas geram crescimento
          exponencial e impacto duradouro.
        </p>
      </motion.div>
    </section>
  );
}
