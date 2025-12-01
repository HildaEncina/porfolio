import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaUsersCog,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiOracle,
  SiNextdotjs,
} from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { SiMysql, SiMongodb } from "react-icons/si";
import { useState } from "react";
import "../../../styles/globals.css";

const Habilidades = () => {
  const [tecnologia, setTecnologia] = useState("Tecnologías");
  const icons = [
    { name: "HTML5", icon: <FaHtml5 color="#E44D26" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={36} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={36} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={36} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={36} /> },
    { name: "Express", icon: <SiExpress color="#AAAAAA" size={36} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" size={36} /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" size={36} /> },
    { name: "GitHub", icon: <FaGithub color="#FFFFFF" size={36} /> },
    { name: "Vite", icon: <SiVite color="#646CFF" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" size={36} /> },
    { name: "Java", icon: <FaJava color="#007396" size={36} /> },
    { name: "Scrum", icon: <FaUsersCog color="#A855F7" size={36} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={36} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={36} /> },
  ];

  return (
    <div
      className="
        relative
        bg-[#0a0a1a]/70 backdrop-blur-lg
        border border-violet-500/50 rounded-2xl
        p-10 md:p-12 lg:p-16
        shadow-[0_0_30px_rgba(139,92,246,0.5)]
        hover:shadow-[0_0_45px_rgba(168,85,247,0.6)]
        transition-all duration-500
        w-full max-w-5xl mx-auto
        text-center
        transform -translate-y-12
      "
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
               text-transparent bg-clip-text 
               bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300
               drop-shadow-[0_0_15px_rgba(180,80,255,0.7)]
               tracking-wide text-center animate-pulse"
      >
        Conocimientos técnicos
      </h2>

      {/* Círculo giratorio */}
      <div className="hidden sm:flex relative items-center justify-center h-[520px] w-[520px] mx-auto">
        {/* Texto central */}
        <div className="absolute z-10 px-4 py-2 bg-black/50 rounded-lg border border-violet-500/40 shadow-lg text-lg font-semibold text-violet-300 transition-all duration-300">
          {tecnologia}
        </div>

        {/* Círculo giratorio */}
        <div className="absolute w-full h-full animate-spin-slow">
          {icons.map((item, i) => (
            <div
              key={i}
              className="tecnologia absolute left-1/2 top-1/2 w-14 h-14 rounded-full bg-[#1a1a2b]/80 border border-violet-400/30 flex items-center justify-center"
              style={{
                transform: `rotate(${
                  (360 / icons.length) * i
                }deg) translate(200px) rotate(-${(360 / icons.length) * i}deg)`,
              }}
              onMouseEnter={() => setTecnologia(item.name)}
              onMouseLeave={() => setTecnologia("Tecnologías")}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Luz decorativa */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-400/10 blur-3xl opacity-70"></div>

      {/* Versión Mobile */}
      <div className="sm:hidden grid grid-cols-2 gap-4 mt-10 px-4">
        {icons.map((item, i) => (
          <div
            key={i}
            className="
        flex flex-col items-center justify-center
        bg-[#151526]/80 border border-violet-500/40 
        rounded-2xl p-4 shadow-lg
        hover:scale-105 hover:shadow-[0_0_25px_rgba(167,139,250,0.5)]
        active:scale-95 transition-all duration-300
      "
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <p className="text-violet-300 font-semibold text-sm text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
