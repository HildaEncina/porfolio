import { motion } from "framer-motion";

const CardProyecto = ({ imagen, titulo, descripcion, enlace }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(168,85,247,0.6)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-[#0a0a1a]/70 backdrop-blur-lg rounded-2xl p-6 
                 border border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.4)]
                 text-left flex flex-col justify-between transition-all duration-500"
    >
      <div>
        <img
          src={imagen}
          alt={titulo}
          className="rounded-xl mb-4 w-full h-48 object-ontain rounded-xl border border-violet-500/30"
        />
        <h3
          className="text-2xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-cyan-400 to-violet-500 mb-3"
        >
          {titulo}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {descripcion}
        </p>
      </div>

      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-all"
      >
        Ver proyecto →
      </a>

      {/* Luz decorativa interna */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none 
                      bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-400/10 
                      blur-3xl opacity-70"
      ></div>
    </motion.div>
  );
};

export default CardProyecto;
