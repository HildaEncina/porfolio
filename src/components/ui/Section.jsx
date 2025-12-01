import AnimatedText from "./AnimatedText";
import SmokeEffect from "./SmokeEffect";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
// Importaciones de lucide-react para todos los componentes
import {
  Home,
  User,
  Settings,
  Briefcase,
  GraduationCap,
  Mail,
  Code,
  Server,
  Download,
  Github,
  Linkedin,
  Monitor,
  Calendar,
  Layers,
  Link,
  Send,
  Database,
} from "lucide-react";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] text-center ml-56 overflow-hidden"
    >
      <SmokeEffect />
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text z-10">
        Hilda Encina
      </h1>
      <AnimatedText />
    </section>
  );
}
