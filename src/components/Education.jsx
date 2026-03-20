import { motion } from "framer-motion";

export default function Education() {
  const items = [
    "Pós-graduação em Inteligência Artificial — Estácio (2026–2027)",
    "Análise e Desenvolvimento de Sistemas — UNOPAR",
    "AWS Academy — Cloud Foundations (em andamento)",
    "Cisco Networking Academy — Cybersecurity Essentials (em andamento)"
  ];

  return (
    <section>
      <h2>Formação</h2>

      {items.map((item, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
}
