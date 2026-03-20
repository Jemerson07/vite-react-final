import { motion } from "framer-motion";

export default function Numbers() {
  const stats = [
    { value: "R$ 400k+", label: "Economia Recuperada" },
    { value: "5.000+", label: "Condutores Gerenciados" },
    { value: "40+", label: "Automações Criadas" },
    { value: "30+", label: "Dashboards Criados" }
  ];

  return (
    <section>
      <h2>Resultados</h2>

      <div className="stats-container">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="card stats-card"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <h1>{s.value}</h1>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
