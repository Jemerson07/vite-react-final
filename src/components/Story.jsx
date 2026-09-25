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
     
      title: "Fundação: Compreendendo as Operações",
      description:
        "Minha carreira começou próximo dos desafios operacionais. Foi nesse período que desenvolvi uma visão crítica sobre processos, identificando gargalos, ineficiências e oportunidades de melhoria que impactavam diretamente os resultados. Antes da tecnologia, aprendi a entender o negócio.",
      icon: "🌱",
      color: "#8b5cf6",
    },
    {
      
      title: "Disciplina, Tecnologia e Resolução de Problemas",
      description:
        "A experiência na Marinha fortaleceu competências que carrego até hoje: disciplina, organização, trabalho sob pressão e pensamento estruturado. Nesse período também tive contato prático com infraestrutura e suporte tecnológico, ampliando minha visão sobre como a tecnologia sustenta operações críticas.",
      icon: "⚙️",
      color: "#0a84ff",
    },
    {
    
      title: "Transformando Conhecimento em Soluções",
      description:
        "Com formação em Análise e Desenvolvimento de Sistemas, comecei a aplicar automação, análise de dados e inteligência artificial para resolver problemas reais. Foi nesse momento que deixei de apenas identificar oportunidades e passei a construir soluções capazes de gerar ganho de escala, produtividade e eficiência",
      icon: "🤖",
      color: "#34d399",
    },
    {
   
      title: "Resultados em Escala",
      description:
        "Atuando na LM Mobilidade, passei a aplicar Business Intelligence, automação e análise operacional em projetos de grande porte. Contribuí para a identificação de aproximadamente R$100 mil em custos não faturados e participei de iniciativas que elevaram controles operacionais de 0,7% para mais de 90%, impactando milhares de usuários. Aqui a tecnologia deixou de ser ferramenta e passou a ser resultado.",
      icon: "🚀",
      color: "#ec4899",
    },
    {
     
      title: "O Próximo Capítulo",
      description:
        "Meu objetivo é atuar em projetos globais onde dados, automação e inteligência operacional possam gerar impacto em larga escala. Busco oportunidades nacionais e internacionais que permitam combinar visão de negócio, tecnologia e inovação para construir operações mais eficientes, inteligentes e orientadas por resultados.",
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
        Da Operação à Inteligência de Negócios
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
        Não cheguei à Inteligência Artificial por tendência. Cheguei porque passei anos lidando com processos que poderiam ser melhores, decisões que poderiam ser mais rápidas e informações que poderiam gerar mais valor.
        Essa busca por eficiência me levou do ambiente operacional ao universo dos dados,
        Business Intelligence e Automação. Hoje, utilizo tecnologia para transformar desafios do dia a dia em soluções escaláveis, inteligentes e orientadas a resultados.
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
