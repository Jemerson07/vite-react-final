import { motion } from "framer-motion";
export default function Hero(){
  return (
    <section className="hero">
      <video autoPlay muted loop className="video-bg" src="/assets/hero.mp4"></video>
      <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
        Marketing Tech Pro
      </motion.h1>
    </section>
  );
}