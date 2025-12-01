import { useState, useEffect } from "react";

const AnimatedText = () => {
  const roles = [
    "Desarrolladora FullStack",
    "Analista de Sistemas",
    "Docente de programación",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex].split(" ");

    if (isTyping) {
      if (wordIndex < currentRole.length) {
        // Lógica de Tipeo
        const timer = setTimeout(() => {
          setWords((prev) => [...prev, currentRole[wordIndex]]);
          setWordIndex((prev) => prev + 1);
        }, 150); 
        return () => clearTimeout(timer);
      } else {
        // Tipeo completo, esperar antes de BORRAR
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500); 
        return () => clearTimeout(timer);
      }
    } else {
      // Lógica de BORRADO / RESET
      const timer = setTimeout(() => {
        setWords([]);
        setWordIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [wordIndex, roleIndex, roles, isTyping]);

  return (
    <p className="text-xl text-gray-300 z-10 font-light mt-2">
      Soy{" "}
      <span className="text-cyan-400 font-medium">
        {words.join(" ")}
        {/* Cursor parpadeante */}
        <span className="ml-1 inline-block w-2 h-6 bg-cyan-400 align-middle animate-pulse"></span>
      </span>
    </p>
  );
}

export default AnimatedText;