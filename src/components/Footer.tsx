"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/crisdevfm",
      icon: "💻",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "💼",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: "🐦",
    },
    {
      label: "Email",
      href: "mailto:tu@email.com",
      icon: "📧",
    },
  ];

  return (
    <motion.footer
      className="bg-white border-t border-gray-300 py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Branding */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold glow-text mb-2">CF</h3>
            <p className="text-gray-600 text-sm">
              SAP ABAP Developer & IT Back End Software Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Cristian Camilo Forero. Todos los derechos reservados. |
            Diseñado y desarrollado con ❤️
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Hecho con Next.js, Tailwind CSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
