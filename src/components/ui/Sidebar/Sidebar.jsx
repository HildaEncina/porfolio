import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./sidebar.css";
import Perfil from "../../../assets/img/perfil.jpg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Botón hamburguesa */}
      <button
        className="fixed top-4 right-4 z-50 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-400 transition lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#000d1a] flex flex-col items-center py-6 shadow-xl transition-transform duration-500 z-40
    w-48 sm:w-52 md:w-56
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
      >
        {/* FOTO PERFIL */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={Perfil}
            alt="Perfil"
            className="w-20 h-20 rounded-full border-2 border-[#7A7368] mb-3 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-cyan-400 font-bold text-lg">Hilda Encina</h2>
        </div>

        {/* ICONOS REDES */}
        <div className="flex gap-3 mb-6 text-gray-400 text-lg">
          <a
            href="#"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/encina-hilda"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HildaEncina"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="flex flex-col gap-5 text-gray-300 text-sm">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaHome className="text-cyan-400" /> Inicio
          </Link>
          <Link
            to="/acerca"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaUser className="text-cyan-400" /> Acerca de
          </Link>
          <Link
            to="/habilidades"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaTools className="text-cyan-400" /> Habilidades
          </Link>
          <Link
            to="/proyectos"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaFolderOpen className="text-cyan-400" /> Proyectos
          </Link>
          <Link
            to="/educacion"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaGraduationCap className="text-cyan-400" /> Educación
          </Link>
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaEnvelope className="text-cyan-400" /> Contacto
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
