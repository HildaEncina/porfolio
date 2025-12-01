// src/components/Hero.jsx
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero flex flex-col justify-center items-center text-center h-screen 
px-6 md:px-16 lg:items-start lg:text-left lg:pl-64 transition-all duration-500"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-lg"
      >
        Hilda Encina
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-xl md:text-2xl mt-4 text-gray-400 font-medium"
      >
        <TypeAnimation
          sequence={[
            "Desarrolladora Full Stack 💻",
            2000,
            "Analista de Sistemas 🎓",
            2000,
            "Docente en Programación 👩‍🏫",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
      >
        Me apasiona crear soluciones digitales que combinen diseño, lógica y
        propósito. Busco transformar ideas en experiencias funcionales y
        visualmente atractivas.
      </motion.p>

      <motion.button
        onClick={() => navigate("/proyectos")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_#38bdf8] transition-all"
      >
        Ver Proyectos
      </motion.button>
    </section>
  );
}

export default Hero;