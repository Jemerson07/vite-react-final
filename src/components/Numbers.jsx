import { motion } from "framer-motion";

export default function Numbers() {
  const stats = [
    { label: "Economia gerada", value: "R$ 400k" },
    { label: "Condutores geridos", value: "5.000+" },
    { label: "Automatizações criadas", value: "40+" },
    { label: "Dashboards desenvolvidos", value: "30+" },
  ];

  return (
    <section>
      <h2>Resultados em Números</h2>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{s.value}</h1>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
