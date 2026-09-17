"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Certificate {
  name: string;
  url: string;
}

type CertificatesProps = {
  lang: "es" | "en";
};

export default function Certificates({ lang }: CertificatesProps) {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  const labels =
    lang === "es"
      ? {
          title: "Certificados SAP",
          loading: "Cargando certificados...",
          emptyTitle: "Certificados SAP",
          emptyText: "📁 Copia tus certificados SAP a:",
          emptySupport: "Formatos soportados: PDF, PNG, JPG, JPEG. Los certificados aparecerán automáticamente cuando los agregues. 🚀",
          view: "Ver Certificado",
          pdf: "Documento PDF",
          image: "Imagen digital",
        }
      : {
          title: "SAP Certificates",
          loading: "Loading certificates...",
          emptyTitle: "SAP Certificates",
          emptyText: "📁 Copy your SAP certificates to:",
          emptySupport: "Supported formats: PDF, PNG, JPG, JPEG. Certificates will appear automatically when you add them. 🚀",
          view: "View Certificate",
          pdf: "PDF document",
          image: "Digital image",
        };

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/certificates.json");
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setCertificates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <section id="certificates" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {labels.title}
          </motion.h2>
          <p className="text-center text-gray-600">{labels.loading}</p>
        </div>
      </section>
    );
  }

  if (certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {labels.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const isPDF = cert.url.toLowerCase().endsWith(".pdf");
            const isImage = /\.(jpg|jpeg|png)$/i.test(cert.url);
            const certName = cert.name
              .replace(/\.[^/.]+$/, "")
              .replace(/[-_]/g, " ");

            return (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-300 hover:border-primary/50 transition-all shadow-sm hover:shadow-md group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center justify-center h-40 mb-4 bg-gray-50 rounded-lg border border-gray-200 group-hover:border-primary/30 transition-all">
                  {isPDF ? (
                    <div className="text-4xl mb-2">📄</div>
                  ) : isImage ? (
                    <div className="text-4xl mb-2">🖼️</div>
                  ) : (
                    <div className="text-4xl mb-2">📋</div>
                  )}
                  <p className="text-xs text-gray-500 text-center px-2">
                    {cert.url.split(".").pop()?.toUpperCase()}
                  </p>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 text-center line-clamp-2 group-hover:text-dark transition-colors">
                  {certName}
                </h3>

                <p className="text-sm text-gray-600 text-center mb-4">
                  {isPDF ? labels.pdf : labels.image}
                </p>

                <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>{labels.view}</span>
                  <span>→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
