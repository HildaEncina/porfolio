import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import Hero from "./components/sections/Hero/Hero";
import Lanyard from "./components/ui/Lanyard/Lanyard";
import AcercaDe from "./components/sections/AcercaDe/AcercaDe";
import Habilidades from "./components/sections/Habilidades/Habilidades";
import Contacto from "./components/sections/Contacto/Contacto";
import Educacion from "./components/sections/Educacion/Educacion";
import Proyectos from "./components/sections/Proyectos/Proyectos";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Lanyard /> 
          <Sidebar /> 

          <main
            className="
              ml-18 min-h-screen 
              flex items-center justify-center 
              px-6 py-12 transition-all duration-500
              bg-transparent
            "
          >
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/acerca" element={<AcercaDe />} />
              <Route path="/habilidades" element={<Habilidades />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/educacion" element={<Educacion />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
        </div>
      </Router>

      {/* 🔥 Toaster para los mensajes bonitos */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1a1a2b",
            color: "#c4b5fd",
            border: "1px solid rgba(168,85,247,0.5)",
            boxShadow: "0 0 15px rgba(168,85,247,0.4)",
          },
          success: {
            iconTheme: {
              primary: "#a855f7",
              secondary: "#1a1a2b",
            },
          },
          error: {
            iconTheme: {
              primary: "#f43f5e",
              secondary: "#1a1a2b",
            },
          },
        }}
      />
    </>
  );
};

export default App;
