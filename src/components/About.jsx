import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <h2>Sobre Mim</h2>

      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Sou um profissional de tecnologia especializado em Dados, IA, Automação
          e soluções digitais. Minha trajetória combina visão analítica,
          criatividade e execução estratégica — sempre com foco em transformar
          processos e gerar impacto real.
        </p>

        <p>
          Atuo no desenvolvimento de dashboards, agentes inteligentes, automações,
          auditorias avançadas e sistemas que reduzem custos e elevam a performance.
        </p>
      </motion.div>
    </section>
  );
}
