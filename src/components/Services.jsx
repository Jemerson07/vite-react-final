import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "IA e Automação Inteligente",
      img: "https://images.unsplash.com/photo-1634382812645-fd2272c38ab5",
    },
    {
      title: "Estratégia & Inovação Corporativa",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    }
  ];

  return (
    <section>
      <h2>Serviços</h2>

      {services.map((s, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${s.img}?auto=format&fit=crop&w=1000&q=80`}
            style={{ width: "100%", borderRadius: "14px", marginBottom: "20px" }}
          />
          <h3>{s.title}</h3>
        </motion.div>
      ))}
    </section>
  );
}
