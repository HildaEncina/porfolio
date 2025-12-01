
import CardProyecto from "../../ui/CardProyecto";
import Porfolio from "../../../assets/img/pofolio.png"
import PilarWines from "../../../assets/img/pilarwines.png"
import Muma from "../../../assets/img/muma.png"
import "./proyectos.css"

const proyectos = [
  {
    titulo: "🍷 Vinoteca Pilar Wines",
    descripcion:
      "Plataforma de e-commerce con autenticación, gestión de productos y carrito de compras. Stack: React, Node.js, MongoDB.",
    imagen: PilarWines,
    enlace: "https://github.com/HildaEncina/vinoteca-frontend",
  },
  {
    titulo: "💻 Mi Portfolio",
    descripcion:
      "Portfolio personal hecho en React, mostrando proyectos, habilidades y sección de contacto. Incluye diseño responsive y animaciones con TailwindCSS.",
    imagen: Porfolio,
    enlace: "https://github.com/HildaEncina/portfolio",
  },
  {
    titulo: "🐾 Muma – Gestión de Adopciones",
    descripcion:
      "Aplicación para la gestión integral de adopciones de mascotas. Participé en el equipo de desarrollo del Frontend implementando interfaces intuitivas, navegación, manejo de estados y conexión con la API. Incluye registro de mascotas, adopciones, perfil de usuarios y panel administrativo. Stack: React, Hooks, Context.",
    imagen: Muma, 
    enlace: "https://github.com/tu-repo-si-tenes",
  },
];

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="min-h-screen px-6 md:px-16 py-24 bg-[#0A192F] text-center"
    >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text 
               bg-gradient-to-r from-violet-500 via-blue-500 to-green-400 
               animate-gradient">
  Mis Proyectos
</h2>


    <div
  className="
    grid 
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-2     /* antes tenías 3 */
    gap-10
    max-w-6xl
    mx-auto
    px-4  justify-items-center  
  "
>

        {proyectos.map((proyecto, index) => (
          <CardProyecto
            key={index}
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos; 