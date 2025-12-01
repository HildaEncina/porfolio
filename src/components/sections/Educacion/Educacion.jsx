const Educacion = () => {
  const educacion = [
    {
      titulo: "Analista de Sistemas",
      institucion: "ORT Argentina",
      año: "2024",
    },
  ];

  const cursos = [
    { titulo: "Bootcamp Frontend", institucion: "Tecso", año: "2024" },
    { titulo: "Full Stack MERN", institucion: "Coding Dojo", año: "2024" },
    {
      titulo: "Frontend",
      institucion: "Oracle Next Education (ONE)",
      año: "2022",
    },
  ];

  return (
    <section
      id="educacion"
      className="relative bg-[#0a0a1a]/70 backdrop-blur-lg border border-violet-500/50 rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all duration-500 w-full max-w-6xl mx-auto mt-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 mb-10 text-center">
        Educación
      </h2>

      {/* EDUCACIÓN PRINCIPAL */}
      <div className="flex flex-col items-center gap-6 mb-12">
        {educacion.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-3/4 lg:w-2/3 bg-white/5 border border-violet-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-300">
              {item.titulo}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              {item.institucion}
            </p>
            <p className="text-gray-400 text-sm sm:text-base">{item.año}</p>
          </div>
        ))}
      </div>

      {/* CURSOS */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-violet-400 mb-6 text-center">
        Cursos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso, index) => (
          <div
            key={index}
            className="bg-white/5 border border-violet-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-violet-300">
              {curso.titulo}
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              {curso.institucion}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">{curso.año}</p>
          </div>
        ))}
      </div>

      {/* Luz decorativa */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-400/10 blur-3xl opacity-70"></div>
    </section>
  );
};

export default Educacion;
