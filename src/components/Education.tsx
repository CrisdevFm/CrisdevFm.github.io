"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachillerato / Educación media",
      school: "Colegio",
      year: "2008 - 2014",
      description: "Formación básica y media con énfasis en competencias académicas, disciplina y preparación para la educación superior.",
    },
    {
      degree: "Ingeniería en Sistemas",
      school: "Universidad de San Buenaventura",
      year: "2015 - 2021",
      description: "Formación en ingeniería de software, redes, bases de datos, programación y solución de problemas empresariales.",
    },
    {
      degree: "Especialización SAP ABAP y tecnologías asociadas",
      school: "SAP Learning / formación práctica",
      year: "2021 - 2024",
      description: "Fortalecimiento en ABAP, SAP S/4HANA, procesos empresariales, desarrollo de soluciones y automatización en entornos SAP.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Educación
        </motion.h2>

        <div className="relative pl-0 md:pl-6">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/40" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-16 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 md:left-3 top-6 w-6 h-6 rounded-full border-4 border-white bg-primary shadow-md" />

              <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
                <p className="text-accent font-semibold mb-2">{edu.school}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
