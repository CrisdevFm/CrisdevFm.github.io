"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "SAP": [
      "SAP ABAP",
      "SAP S/4HANA",
      "SAP BTP",
      "SAP Fiori",
      "SAP Workflow",
      "SmartForms / Adobe Forms",
    ],
    "Backend Development": [
      "ABAP OOP",
      "Data Dictionary",
      "BAPIs y BAdIs",
      "Integración entre sistemas",
      "Automatización de procesos",
      "Facturación electrónica",
    ],
    "Otros": [
      "Linux",
      "ISO/IEC 27001:2022",
      "Ethical Hacking",
      "Git",
      "SQL",
      "Cloud en aprendizaje",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-gray-50 p-8 rounded-lg border border-gray-300 hover:border-primary transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgb(212, 175, 55)" }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="flex-shrink-0 w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    />
                    <span className="text-gray-700 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
