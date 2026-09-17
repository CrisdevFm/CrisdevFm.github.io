"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeaderProps = {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
};

export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks =
    lang === "es"
      ? [
          { label: "Inicio", href: "#home" },
          { label: "Sobre Mí", href: "#about" },
          { label: "Habilidades", href: "#skills" },
          { label: "Experiencia", href: "#experience" },
          { label: "Educación", href: "#education" },
          { label: "CV", href: "#cv" },
          { label: "Proyectos", href: "#projects" },
          { label: "Contacto", href: "#contact" },
        ]
      : [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Education", href: "#education" },
          { label: "CV", href: "#cv" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-primary/30 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home" className="font-bold tracking-wider text-primary glow-text">
            CF
          </a>
        </motion.div>

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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-2 text-xs font-bold rounded-lg border border-primary text-primary bg-[#121212] hover:bg-primary hover:text-dark transition-all"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <motion.a
            href="https://github.com/crisdevfm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-[#f5d77b] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
