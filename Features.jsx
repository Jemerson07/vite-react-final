import { motion } from "framer-motion";
export default function Features(){
 return (
  <div className="features">
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="card">
      Animações Avançadas
    </motion.div>
  </div>
 );
}