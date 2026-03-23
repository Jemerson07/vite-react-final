import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count}</span>;
};

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Numbers() {
  const stats = [
    { value: 6, label: "Anos de Experiência", symbol: "+", color: "#34d399" },
    { value: 100, label: "Processos Otimizados", symbol: "%", color: "#0a84ff" },
    { value: 50, label: "Automações Criadas", symbol: "+", color: "#fb923c" },
    { value: 30, label: "Dashboards Estratégicos", symbol: "+", color: "#8b5cf6" },
  ];

  return (
    <section id="numbers">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Resultados em Números
      </motion.h2>

      <motion.div
        className="grid-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -8 }}
            style={{ textAlign: "center" }}
          >
            <h3
              style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                marginBottom: "10px",
                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {stat.symbol}
              <Counter target={stat.value} duration={2} />
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
