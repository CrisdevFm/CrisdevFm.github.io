"use client";

import { motion } from "framer-motion";

type SkillsProps = {
  lang: "es" | "en";
};

export default function Skills({ lang }: SkillsProps) {
  const skillGroups = [
    {
      id: "sap",
      label: { es: "SAP", en: "SAP" },
      items: [
        "SAP ABAP",
        "SAP S/4HANA",
        "SAP BTP",
        "SAP Fiori",
        "SAP Workflow",
        "SmartForms / Adobe Forms",
      ],
    },
    {
      id: "backend",
      label: { es: "Desarrollo Backend", en: "Backend Development" },
      items:
        lang === "es"
          ? [
              "ABAP OOP",
              "Data Dictionary",
              "BAPIs y BAdIs",
              "SAP Workflow",
              "SAP Fiori",
              "Facturación electrónica",
            ]
          : [
              "ABAP OOP",
              "Data Dictionary",
              "BAPIs and BAdIs",
              "SAP Workflow",
              "SAP Fiori",
              "Electronic invoicing",
            ],
    },
    {
      id: "other",
      label: { es: "Otros", en: "Other" },
      items:
        lang === "es"
          ? [
              "Linux",
              "ISO/IEC 27001:2022",
              "Ethical Hacking",
              "Git",
              "SQL",
              "Cloud en aprendizaje",
            ]
          : [
              "Linux",
              "ISO/IEC 27001:2022",
              "Ethical Hacking",
              "Git",
              "SQL",
              "Cloud learning path",
            ],
    },
  ];

  const courses =
    lang === "es"
      ? [
        "WEBINAR JOULE FOR DEVELOPERS",
        "Master SAP Workflow On-Premise",
        "SAP_ABAP_RESTful_Iniciación",
        "SAP UI5 - SAP ABAS",
        "SAP ABAP Fiori Administración",
        "Auditor líder ISO 27001",
        "Curso Ethical Hacking / Red Team 3ra edición - Hacker Mentor",
        "Fundamentos de ciberseguridad",
        "Fundamentos de la ciberseguridad para profesionales IT",
        "Fundamentos de la ciberseguridad: Sistemas operativos",
        "Gestión de riesgos de seguridad para empresas",
        "Ingeniería social para IT",
        "Fundamentos de la ciberseguridad: Redes",
        "Primeros pasos con Secure Socket Layer (SSL)",
        "Seguridad informática: Investigación y respuesta",
        "Conviértete en especialista en seguridad de la información",
        "Seguridad informática: Informática forense",
        "Transformación digital: El rol del CTO",
      ]
      : [
        "WEBINAR JOULE FOR DEVELOPERS",
        "Master SAP Workflow On-Premise",
        "SAP_ABAP_RESTful_Introduction",
        "SAP UI5 - SAP ABAS",
        "SAP ABAP Fiori Administration",
        "ISO 27001 Lead Auditor",
        "Ethical Hacking / Red Team Course 3rd Edition - Hacker Mentor",
        "Cybersecurity Fundamentals",
        "Cybersecurity Fundamentals for IT Professionals",
        "Cybersecurity Fundamentals: Operating Systems",
        "Security Risk Management for Businesses",
        "Social Engineering for IT",
        "Cybersecurity Fundamentals: Networks",
        "Getting Started with Secure Socket Layer (SSL)",
        "IT Security: Investigation and Response",
        "Become a Specialist in Information Security",
        "IT Security: Computer Forensics",
        "Digital Transformation: The CTO Role",
      ];

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
          {lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              className="bg-gray-50 p-8 rounded-lg border border-gray-300 hover:border-primary transition-all shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgb(212, 175, 55)" }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                {group.label[lang]}
              </h3>
              <div className="space-y-3">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={`${group.id}-${skill}`}
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
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
            {lang === "es" ? "Cursos y certificaciones" : "Courses and certifications"}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {courses.map((course, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-white border border-primary/20 text-gray-700 rounded-full text-sm shadow-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
