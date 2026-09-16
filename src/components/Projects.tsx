"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  archived?: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Reemplaza 'crisdevfm' con tu usuario de GitHub
        const response = await axios.get(
          "https://api.github.com/users/crisdevfm/repos",
          {
            params: {
              sort: "updated",
              per_page: 12,
              type: "owner",
            },
          }
        );

        // Filtrar repositorios válidos (con descripción y no archivados)
        const filteredRepos = response.data.filter(
          (repo: GitHubRepo) => repo.description && !(repo.archived ?? false)
        );

        setProjects(filteredRepos);
      } catch (err) {
        console.error("Error fetching GitHub projects:", err);
        setError("No se pudieron cargar los proyectos de GitHub");
        // Mostrar proyectos de demostración si hay error
        setProjects(demoProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const demoProjects: GitHubRepo[] = [
    {
      id: 1,
      name: "CrisdevFm.github.io",
      description: "Portfolio interactivo personal",
      html_url: "https://github.com/crisdevfm/crisdevfm.github.io",
      stargazers_count: 5,
      language: "TypeScript",
      topics: ["portfolio", "nextjs", "tailwindcss"],
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico con carrito dinámico",
      html_url: "#",
      stargazers_count: 12,
      language: "React",
      topics: ["ecommerce", "react", "nodejs"],
    },
    {
      id: 3,
      name: "Task Manager App",
      description: "Aplicación de gestión de tareas con autenticación",
      html_url: "#",
      stargazers_count: 8,
      language: "Next.js",
      topics: ["productivity", "full-stack", "mongodb"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proyectos Destacados
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Algunos de mis proyectos recientes. Puedes ver más en mi{" "}
          <a
            href="https://github.com/crisdevfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent font-bold"
          >
            perfil de GitHub
          </a>
          .
        </motion.p>

        {loading && (
          <motion.div
            className="text-center py-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-700">Cargando proyectos...</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="text-center py-4 mb-8 text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.length > 0 && projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-lg border border-gray-300 hover:border-primary/50 transition-all cursor-pointer group shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)",
              }}
            >
              {/* Header with stars */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex-1">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 text-accent text-sm ml-2">
                  ⭐ {project.stargazers_count}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Language */}
              {project.language && (
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getLanguageColor(project.language) }}
                  />
                  <span className="text-gray-600 text-sm">{project.language}</span>
                </div>
              )}

              {/* Topics/Tags */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Link indicator */}
              <motion.div
                className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ver en GitHub →
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    "Python": "#3572A5",
    React: "#61dafb",
    "Next.js": "#ffffff",
  };
  return colors[language] || "#00d4ff";
}
