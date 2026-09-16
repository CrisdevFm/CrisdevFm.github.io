"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Ingeniería en Sistemas",
      school: "Universidad de San Buenaventura",
      year: "2020",
      description: "Formación sólida en informática, redes, sistemas y programación orientada a objetos.",
    },
    {
      degree: "Certificación SAP ABAP",
      school: "SAP & Partner Training",
      year: "2021-2023",
      description: "Especialización en desarrollo ABAP, S/4HANA y modernización de sistemas SAP.",
    },
    {
      degree: "Certificaciones en Cloud & BTP",
      school: "SAP Learning Hub",
      year: "2023-2024",
      description: "Capacitación en SAP BTP, arquitectura cloud y soluciones empresariales modernas.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Educación
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-300 hover:border-accent/50 transition-all shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                🎓
              </motion.div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-accent font-semibold mb-2">{edu.school}</p>
              <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
              <p className="text-gray-700 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
