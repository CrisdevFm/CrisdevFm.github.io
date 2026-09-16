"use client";

import { motion } from "framer-motion";

export default function About() {
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
          Sobre Mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-accent pl-4">
              <p className="text-lg font-semibold text-primary mb-2">
                Perfil Profesional
              </p>
              <p className="text-gray-600">
                Ingeniero de Sistemas y Desarrollador SAP ABAP con experiencia construyendo y manteniendo soluciones dentro del ecosistema SAP, desde reportes y herramientas de gestión hasta integraciones entre sistemas y automatización de procesos de negocio.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Me desenvuelvo con facilidad en proyectos de desarrollo, soporte y mejora continua, y disfruto entender el negocio detrás de cada requerimiento para proponer soluciones sólidas. Mi enfoque está en entregar valor real a procesos empresariales con calidad técnica y criterio funcional.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Actualmente amplío mi perfil hacia SAP S/4HANA, SAP BTP y desarrollo Cloud, con el objetivo de seguir creciendo dentro del ecosistema SAP y fortalecer mi capacidad para liderar soluciones más modernas y escalables.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">Especialidad</div>
                <div className="text-gray-700">SAP ABAP Development</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">Industria</div>
                <div className="text-gray-700">Energía & Tecnología</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">Empresa Actual</div>
                <div className="text-gray-700">SLB (Schlumberger)</div>
              </div>
              <div className="bg-stone-100 p-3 rounded border-l-4 border-primary">
                <div className="text-sm font-semibold text-primary">Ubicación</div>
                <div className="text-gray-700">Colombia</div>
              </div>
            </div>

            <div className="mt-8 bg-stone-100 rounded-xl border border-primary/20 p-5">
              <p className="text-sm font-semibold text-primary mb-2">Hoja de vida</p>
              <p className="text-gray-600 mb-4">
                Guarda tus documentos actualizados en la carpeta pública y accede a ellos desde aquí.
              </p>
              <a
                href="/cv/"
                className="inline-flex items-center px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-dark transition-all"
              >
                Ver archivos CV
              </a>
            </div>
          </motion.div>

          {/* Avatar Animation */}
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
