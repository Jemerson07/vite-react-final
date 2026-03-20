import { motion } from "framer-motion";

export default function Education() {
  return (
    <section>
      <h2>Formação</h2>

      <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Pós-graduação em Inteligência Artificial — Estácio (2026–2027)
      </motion.div>

      <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Análise e Desenvolvimento de Sistemas — UNOPAR
      </motion.div>

      <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        AWS Academy — Cloud Foundations (em andamento)
      </motion.div>

      <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Cisco Networking Academy — Cybersecurity Essentials (em andamento)
      </motion.div>
    </section>
  );
}
