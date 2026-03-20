import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "IA e Automação Inteligente",
      img: "https://images.unsplash.com/photo-1634382812645-fd2272c38ab5",
      desc: "Desenvolvimento de agentes de IA e automação de fluxos operacionais para máxima eficiência."
    },
    {
      title: "Estratégia & Inovação Corporativa",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      desc: "Consultoria em inovação e implementação de tecnologias disruptivas para transformação digital."
    }
  ];

  return (
    <section>
      <h2>Serviços</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <img
              src={`${s.img}?auto=format&fit=crop&w=1000&q=80`}
              alt={s.title}
              style={{ 
                width: "100%", 
                height: "200px", 
                objectFit: "cover", 
                borderRadius: "14px", 
                marginBottom: "20px" 
              }}
            />
            <h3 style={{ marginBottom: "15px" }}>{s.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
