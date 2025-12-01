import { useNavigate } from "react-router-dom";


const AcercaDe = () => {
    const navigate = useNavigate();
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "CVHildaEncina.pdf";
    link.download = "Hilda-Encina-CV.pdf"; 
    link.click();
  };
 const handleContacto = () => {
    navigate("/contacto"); // 
 }
  return (
    <div
      id="acerca"
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
    mt-[-50px]    
  "
    >
      <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-6">
        Acerca de mí
      </h2>

      <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-8">
        ¡Hola! Soy{" "}
        <span className="text-violet-300 font-semibold">Hilda Encina</span>, Soy
        Analista de Sistemas con experiencia como Desarrolladora Full Stack
        Freelance y Docente en programación. Me apasiona el desarrollo web, la
        enseñanza, el aprendizaje continuo y crear soluciones tecnológicas que
        generen impacto. Buscando eficiencia y no solo resultados.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-6 py-3 rounded-xl border border-violet-500 text-violet-300 text-base md:text-lg hover:bg-violet-600/20 transition"
          onClick={handleDownloadCV}>
          
          Descargar CV
        </button>
        <button  onClick={handleContacto} className="px-6 py-3 rounded-xl bg-violet-600 text-white text-base md:text-lg hover:bg-violet-500 transition">
          Contáctame
        </button>
      </div>

      {/* Luz decorativa */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-400/10 blur-3xl opacity-70"></div>
    </div>
  );
};

export default AcercaDe;
