"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiencia", href: "#experience" },
    { label: "Educación", href: "#education" },
    { label: "CV", href: "#cv" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-primary/20 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home" className="font-semibold tracking-wider">CF</a>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/crisdevfm"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-accent transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
      </nav>
    </motion.header>
  );
}
