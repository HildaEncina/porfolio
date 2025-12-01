import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaClock,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m3wpf3g",
        "template_oiuyskf",
        form.current,
        "1ZKLFNEwC1q5KdsHg"
      )
      .then(() => {
        toast.success("✅ ¡Mensaje enviado correctamente!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Ocurrió un error. Intenta nuevamente.");
      });
  };

  return (
    <section
      id="contacto"
      className="
    relative
    flex flex-col justify-start items-center
    bg-[#0a0a1a]/70 backdrop-blur-lg
    border border-violet-500/50 rounded-2xl
    p-4 sm:p-6 md:p-8
    shadow-[0_0_40px_rgba(168,85,247,0.8)]
    transition-all duration-500
    w-[95%] max-w-5xl mx-auto text-white
    min-h-[70vh]
    overflow-visible
  "
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-300 mb-6 sm:mb-10 text-center">
        Contacto
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 w-full px-2">
        {/* Columna izquierda */}
        <div className="md:w-1/2 w-full bg-[#0f0f1f]/70 p-5 sm:p-6 rounded-xl border border-violet-500/30 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
          <div className="space-y-6 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-violet-400 mt-1" />
              <div>
                <h3 className="font-semibold text-violet-300">Ubicación</h3>
                <p> Ituzaingó - Buenos Aires - Argentina.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-violet-400 mt-1" />
              <div>
                <h3 className="font-semibold text-violet-300">Teléfono</h3>
                <p>+5491138889172</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-violet-400 mt-1" />
              <div>
                <h3 className="font-semibold text-violet-300">Email</h3>
                <p>dev.encina.hilda@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-violet-400 mt-1" />
              <div>
                <h3 className="font-semibold text-violet-300">
                  Horario de disponibilidad
                </h3>
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-violet-300 mb-2">
                Redes Profesionales
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/encina-hilda/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2b] rounded-lg border border-violet-500/40 hover:bg-violet-600/20 transition"
                >
                  <FaLinkedin className="text-blue-400" /> LinkedIn
                </a>
                <a
                  href="https://github.com/HildaEncina"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2b] rounded-lg border border-violet-500/40 hover:bg-violet-600/20 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="pt-4">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0642066033127!2d-98.4343!3d19.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d09d6a0bb0a6c7%3A0x8a6a9d507d02ad0!2sLa%20Hidalguense!5e0!3m2!1ses!2smx!4v1699896597123!5m2!1ses!2smx"
                width="100%"
                height="150"
                className="rounded-lg border border-violet-400/30"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ✉️ Columna derecha */}
        <div className="md:w-1/2 bg-[#0f0f1f]/70 p-6 rounded-xl border border-violet-500/30 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 rounded-md bg-[#1a1a2b] border border-violet-500/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Tu email"
                required
                className="w-full px-4 py-2 rounded-md bg-[#1a1a2b] border border-violet-500/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a2b] border border-violet-500/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Mensaje"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1a1a2b] border border-violet-500/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="self-center mt-2 px-8 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/* ✨ Luz decorativa */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-400/10 blur-3xl opacity-80"></div>
    </section>
  );
};

export default Contacto;
