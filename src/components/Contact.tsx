"use client";

import { motion } from "framer-motion";

type ContactProps = {
  lang: "es" | "en";
};

export default function Contact({ lang }: ContactProps) {
  const contactMethods =
    lang === "es"
      ? [
          { icon: "🌍", label: "Ubicación", value: "Bogotá, Colombia", href: "https://maps.google.com/?q=Bogota+Colombia" },
          { icon: "📧", label: "Email", value: "ccforerom@gmail.com", href: "mailto:ccforerom@gmail.com" },
          { icon: "📞", label: "Teléfono", value: "316 436 9023", href: "tel:+573164369023" },
          { icon: "📄", label: "CV", value: "CV Español / English", href: "/cv/" },
          { icon: "💼", label: "LinkedIn", value: "Cristian Camilo Forero Murillo", href: "https://www.linkedin.com/in/cristian-camilo-forero-murillo-768682211/" },
          { icon: "💻", label: "GitHub", value: "github.com/crisdevfm", href: "https://github.com/crisdevfm" },
        ]
      : [
          { icon: "🌍", label: "Location", value: "Bogotá, Colombia", href: "https://maps.google.com/?q=Bogota+Colombia" },
          { icon: "📧", label: "Email", value: "ccforerom@gmail.com", href: "mailto:ccforerom@gmail.com" },
          { icon: "📞", label: "Phone", value: "316 436 9023", href: "tel:+573164369023" },
          { icon: "📄", label: "CV", value: "Spanish CV / English CV", href: "/cv/" },
          { icon: "💼", label: "LinkedIn", value: "Cristian Camilo Forero Murillo", href: "https://www.linkedin.com/in/cristian-camilo-forero-murillo-768682211/" },
          { icon: "💻", label: "GitHub", value: "github.com/crisdevfm", href: "https://github.com/crisdevfm" },
        ];

  const labels =
    lang === "es"
      ? {
          title: "Contacto",
          connect: "Conectemos",
        }
      : {
          title: "Contact",
          connect: "Let’s connect",
        };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
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

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-left">
              {labels.connect}
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-primary/50 transition-all shadow-sm max-w-2xl"
                whileHover={{ x: 10 }}
              >
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <h4 className="font-semibold text-primary text-lg">
                    {method.label}
                  </h4>
                  <p className="text-gray-600">{method.value}</p>
                </div>
                <motion.div
                  className="ml-auto text-primary opacity-0 hover:opacity-100"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
