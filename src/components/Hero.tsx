"use client";

import { motion } from "framer-motion";

type HeroProps = {
  lang: "es" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const content =
    lang === "es"
      ? {
          headline: "Cristian Camilo Forero Murillo",
          subtitle: "Ingeniero de Sistemas | Desarrollador SAP ABAP",
          description:
            "Ingeniero de Sistemas y Desarrollador SAP ABAP con experiencia en desarrollo, soporte y mejora continua de soluciones dentro del ecosistema SAP. Mi enfoque principal es SAP, con especial interés en SAP ABAP, SAP S/4HANA, SAP BTP, SAP Workflow, SAP Fiori y el desarrollo relacionado con el entorno SAP.",
          projects: "Ver Mis Proyectos",
          contact: "Contáctame",
          cv: "Hoja de Vida",
        }
      : {
          headline: "Cristian Camilo Forero Murillo",
          subtitle: "Systems Engineer | SAP ABAP Developer",
          description:
            "Systems Engineer and SAP ABAP Developer with experience in development, support, and continuous improvement of solutions in the SAP ecosystem. My main focus is SAP, with a strong interest in SAP ABAP, SAP S/4HANA, SAP BTP, SAP Workflow, SAP Fiori, and SAP-related development.",
          projects: "View My Projects",
          contact: "Contact Me",
          cv: "Resume",
        };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold text-sm"
        >
          <span>⚙️</span>
          <span>{lang === "es" ? "Perfil enfocado en SAP" : "SAP-focused profile"}</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 text-primary"
        >
          {content.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-primary mb-4"
        >
          {content.subtitle}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl"
        >
          {content.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-dark transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.projects}
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.contact}
          </motion.a>

          <motion.a
            href="/cv/"
            className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.cv}
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/crisdevfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            💻
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/cristian-camilo-forero-murillo-768682211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            💼
          </motion.a>
          <motion.a
            href="mailto:ccforerom@gmail.com"
            className="text-3xl hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            ✉️
          </motion.a>
          <motion.a
            href="/cv/"
            className="text-3xl hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            📄
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
