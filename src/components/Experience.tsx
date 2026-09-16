"use client";

import { motion } from "framer-motion";

type ExperienceProps = {
  lang: "es" | "en";
};

export default function Experience({ lang }: ExperienceProps) {
  const experiences =
    lang === "es"
      ? [
          {
            title: "IT Back End Software Engineer (Desarrollador ABAP)",
            company: "Schlumberger",
            period: "Julio 2026 – Actualidad",
            description:
              "Desarrollo de soluciones backend en SAP ABAP dentro de un entorno corporativo de gran escala, adaptándome a estándares, buenas prácticas y procesos de desarrollo propios de una organización multinacional.",
            skills: ["SAP ABAP", "Backend", "Desarrollo corporativo", "Buenas prácticas"],
          },
          {
            title: "Desarrollador Técnico ABAP",
            company: "Just Time Consulting Group",
            period: "Enero 2025 – Julio 2026",
            description:
              "Desarrollo y mantenimiento de reportes para seguimiento y control de procesos, integración de información entre sistemas, diseño de flujos de aprobación y notificación en SAP, soporte productivo, diseño de formularios, y participación en proyectos de facturación electrónica y nómina electrónica para distintos países.",
            skills: ["ABAP", "Integración", "Workflow", "Formularios", "Facturación electrónica"],
          },
          {
            title: "Practicante de Ciberseguridad OT",
            company: "Henkel",
            period: "Julio 2023 – Enero 2024",
            description:
              "Apoyo en gestión de seguridad de la información y ciberseguridad en entornos de tecnología operativa (OT), con enfoque en fortalecimiento de procesos y prevención de riesgos.",
            skills: ["Ciberseguridad", "OT", "Seguridad de la información", "Soporte"],
          },
        ]
      : [
          {
            title: "IT Back End Software Engineer (ABAP Developer)",
            company: "Schlumberger",
            period: "July 2026 – Present",
            description:
              "Development of backend solutions in SAP ABAP within a large-scale corporate environment, adapting to standards, best practices, and development processes typical of a multinational organization.",
            skills: ["SAP ABAP", "Backend", "Corporate development", "Best practices"],
          },
          {
            title: "Technical ABAP Developer",
            company: "Just Time Consulting Group",
            period: "January 2025 – July 2026",
            description:
              "Development and maintenance of reports for process tracking and control, information integration between systems, design of approval and notification flows in SAP, production support, form design, and participation in electronic billing and payroll projects across different countries.",
            skills: ["ABAP", "Integration", "Workflow", "Forms", "Electronic billing"],
          },
          {
            title: "OT Cybersecurity Intern",
            company: "Henkel",
            period: "July 2023 – January 2024",
            description:
              "Support in information security and cybersecurity management in operational technology (OT) environments, focused on process strengthening and risk prevention.",
            skills: ["Cybersecurity", "OT", "Information security", "Support"],
          },
        ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {lang === "es" ? "Experiencia Laboral" : "Work Experience"}
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md" />

              {index < experiences.length - 1 && (
                <div className="absolute left-2.5 top-8 w-1 h-32 bg-primary" />
              )}

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 hover:border-primary/50 transition-all shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-accent font-semibold mb-3">{exp.company}</p>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
