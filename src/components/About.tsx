"use client";

import { motion } from "framer-motion";

type AboutProps = {
  lang: "es" | "en";
};

export default function About({ lang }: AboutProps) {
  const content =
    lang === "es"
      ? {
          title: "Sobre Mí",
          profile: "Perfil Profesional",
          intro:
            "Ingeniero de Sistemas y Desarrollador SAP ABAP con experiencia construyendo y manteniendo soluciones dentro del ecosistema SAP, desde reportes y herramientas de gestión hasta integraciones entre sistemas y automatización de procesos de negocio.",
          paragraph1:
            "Me desenvuelvo con facilidad en proyectos de desarrollo, soporte y mejora continua, y disfruto entender el negocio detrás de cada requerimiento para proponer soluciones sólidas. Mi enfoque está en entregar valor real a procesos empresariales con calidad técnica y criterio funcional.",
          paragraph2:
            "Actualmente amplío mi perfil hacia SAP ABAP, SAP S/4HANA, SAP BTP, SAP Workflow y desarrollo SAP en general, con el objetivo de seguir creciendo dentro del ecosistema SAP y fortalecer mi capacidad para crear soluciones más modernas y escalables.",
          specialty: "Especialidad",
          industry: "Industria",
          company: "Empresa Actual",
          location: "Ubicación",
          resume: "CV",
          resumeText:
            "Accede a mis CV actualizados y documentos descargables desde esta sección.",
          button: "Ver archivos CV",
        }
      : {
          title: "About Me",
          profile: "Professional Profile",
          intro:
            "Systems Engineer and SAP ABAP Developer with experience in building and maintaining solutions within the SAP ecosystem, from reports and management tools to system integrations and business process automation.",
          paragraph1:
            "I work comfortably in development, support, and continuous improvement projects, and I enjoy understanding the business behind each requirement to propose solid solutions. My focus is to deliver real value to business processes with technical quality and functional criteria.",
          paragraph2:
            "I am currently expanding my profile toward SAP S/4HANA, SAP BTP, SAP Workflow, and Cloud development, with the goal of continuing to grow in the SAP ecosystem and strengthen my ability to lead more modern and scalable solutions.",
          specialty: "Specialty",
          industry: "Industry",
          company: "Current Company",
          location: "Location",
          resume: "CV",
          resumeText:
            "Access my updated CVs and downloadable documents from this section.",
          button: "View CV files",
        };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {content.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-accent pl-4">
              <p className="text-lg font-semibold text-primary mb-2">
                {content.profile}
              </p>
              <p className="text-gray-600">{content.intro}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{content.paragraph1}</p>
            <p className="text-gray-600 leading-relaxed">{content.paragraph2}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">{content.specialty}</div>
                <div className="text-gray-700">SAP ABAP Development</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">{content.industry}</div>
                <div className="text-gray-700">Energy & Technology</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">{content.company}</div>
                <div className="text-gray-700">SLB (Schlumberger)</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">{content.location}</div>
                <div className="text-gray-700">Colombia</div>
              </div>
            </div>

            <div className="mt-8 bg-stone-100 rounded-xl border border-primary/20 p-5">
              <p className="text-sm font-semibold text-primary mb-2">{content.resume}</p>
              <p className="text-gray-600 mb-4">{content.resumeText}</p>
              <a
                href="/cv/"
                className="inline-flex items-center px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-dark transition-all"
              >
                {content.button}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20" />
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center border-2 border-primary/30 shadow-lg">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
