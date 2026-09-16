"use client";

import { motion } from "framer-motion";

type CVSectionProps = {
  lang: "es" | "en";
};

const cvFiles = [
  {
    lang: "Español",
    title: "CV Cristian Forero Murillo",
    href: "/cv/CV_Cristian_Forero_Murillo.pdf",
    accent: "bg-primary text-dark",
  },
  {
    lang: "English",
    title: "CV Cristian Forero Murillo",
    href: "/cv/CV_Cristian_Forero_Murillo_EN.pdf",
    accent: "bg-white text-primary border border-primary",
  },
];

export default function CVSection({ lang }: CVSectionProps) {
  const labels =
    lang === "es"
      ? {
          title: "Hoja de Vida",
          description:
            "Descarga o abre la versión actualizada de mi hoja de vida para conocer mi experiencia, perfil profesional y trayectoria.",
          open: "Abrir PDF",
          download: "Descargar",
        }
      : {
          title: "Resume",
          description:
            "Download or open the latest version of my CV to learn about my experience, professional profile, and background.",
          open: "Open PDF",
          download: "Download",
        };

  return (
    <section id="cv" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {labels.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cvFiles.map((cv, index) => (
            <motion.div
              key={cv.lang}
              className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-semibold text-primary mb-3">{cv.lang}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{cv.title}</h3>
              <p className="text-gray-700 mb-6">{labels.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={cv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-lg font-bold transition-all ${cv.accent}`}
                >
                  {labels.open}
                </a>
                <a
                  href={cv.href}
                  download
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-bold hover:border-primary hover:text-primary transition-all"
                >
                  {labels.download}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
