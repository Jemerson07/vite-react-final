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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      <motion.div
        className="glass"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          Sou um <strong>analista estratégico</strong> com forte orientação para
          resultados, decisões baseadas em dados e solução de problemas complexos.
          Minha trajetória une experiências práticas na área de tecnologia, análise
          operacional, automação, auditorias avançadas e inteligência artificial
          aplicada ao negócio.
        </motion.p>

        <motion.p variants={itemVariants}>
          Trabalho com foco absoluto em <strong>precisão, eficiência e impacto
          estratégico</strong> — criando soluções que reduzem custos, aumentam
          performance e entregam melhorias reais no processo decisório. Minha
          abordagem combina disciplina, visão crítica, inovação e uma profunda
          capacidade de estruturar dados, métricas e sistemas que sustentam
          decisões de alto nível.
        </motion.p>

        <motion.div
          style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}
          variants={itemVariants}
        >
          <div>
            <h3 style={{ marginBottom: "10px" }}>🎯 Especialidade</h3>
            <p style={{ fontSize: "0.95rem" }}>
              Análise de dados, IA, automação de processos e consultoria estratégica
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "10px" }}>📊 Metodologia</h3>
            <p style={{ fontSize: "0.95rem" }}>
              Data-driven, orientada a resultados e com foco em ROI mensurável
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "10px" }}>💼 Disponibilidade</h3>
            <p style={{ fontSize: "0.95rem" }}>
              <span className="badge badge-success">Disponível para PJ</span>
              <span className="badge badge-success">Projetos Estratégicos</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
