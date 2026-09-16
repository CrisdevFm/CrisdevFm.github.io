"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la integración con un servicio de email
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "ccforerom@gmail.com",
      href: "mailto:ccforerom@gmail.com",
    },
    {
      icon: "📄",
      label: "CV",
      value: "CV Español / English",
      href: "/cv/",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Cristian Camilo Forero Murillo",
      href: "https://www.linkedin.com/in/cristian-camilo-forero-murillo-768682211/",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/crisdevfm",
      href: "https://github.com/crisdevfm",
    },
  ];

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
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Conectemos
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-primary/50 transition-all shadow-sm"
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

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Nombre
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ borderColor: "rgb(212, 175, 55)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ borderColor: "rgb(212, 175, 55)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Asunto
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ borderColor: "rgb(212, 175, 55)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Mensaje
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors resize-none"
                whileFocus={{ borderColor: "rgb(212, 175, 55)" }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-dark transition-all shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? "¡Mensaje Enviado! ✓" : "Enviar Mensaje"}
            </motion.button>

            {submitted && (
              <motion.p
                className="text-center text-primary font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Gracias por tu mensaje. Te responderé pronto.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
