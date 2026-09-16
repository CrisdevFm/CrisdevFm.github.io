"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import CVSection from "@/components/CVSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Education lang={lang} />
      <CVSection lang={lang} />
      <Certificates lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </motion.main>
  );
}
