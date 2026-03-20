import { motion } from "framer-motion";

const skills = [
  "Python",
  "Power BI",
  "Excel Avançado",
  "SQL",
  "Power Automate",
  "Zoho CRM",
  "IA & Agentes",
  "AWS Cloud",
  "Cisco Cybersecurity",
  "GitHub / VS Code",
];

export default function Skills() {
  return (
    <section>
      <h2>Habilidades</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.08 }}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
