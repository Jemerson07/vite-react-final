import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <h2>Sobre Mim</h2>

      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p>
          Sou um analista com forte orientação para resultados, decisões baseadas
          em dados e solução de problemas complexos. Minha trajetória une experiências 
          práticas na área de tecnologia, análise operacional, automação, auditorias 
          avançadas e inteligência artificial aplicada ao negócio.
        </p>

        <p>
          Trabalho com foco absoluto em precisão, eficiência, clareza analítica 
          e impacto estratégico — criando soluções que reduzem custos, aumentam 
          performance e entregam melhorias reais no processo decisório.
        </p>

        <p>
          Minha abordagem combina disciplina, visão crítica, inovação e uma profunda 
          capacidade de estruturar dados, métricas e sistemas que sustentam decisões 
          de alto nível.
        </p>
      </motion.div>
    </section>
  );
}
