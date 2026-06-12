import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  size: 'large' | 'medium' | 'small';
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 3,
      title: 'Sophie Bluel',
      description: 'Portfolio dynamique avec filtres, modale d\'upload et système de login',
      image: '/projects/sophie-bluel.webp',
      tags: ['JavaScript', 'API REST', 'HTML', 'CSS'],
      github: 'https://portfolio-sophie-bluel-gamma.vercel.app/',
      size: 'large',
    },
    {
      id: 2,
      title: 'Mon Vieux Grimoire',
      description: 'API backend de notation et gestion de livres avec authentification',
      image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1080&q=80',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/WAndrea0207/Mon-vieux-Grimoire',
      size: 'large',
    },
    {
      id: 1,
      title: 'Kasa',
      description: 'Application web de location immobilière avec React et React Router',
      image: '/projects/kasa.webp',
      tags: ['React', 'SCSS', 'Vite', 'React Router'],
      github: 'https://kasa-tau-nine.vercel.app/',
      size: 'medium',
    },
    {
      id: 4,
      title: 'Nina Carducci',
      description: 'Optimisation SEO et performances d\'un site de photographe',
      image: '/projects/nina-carducci.webp',
      tags: ['SEO', 'Performance', 'Lighthouse', 'Schema.org'],
      github: 'https://github.com/WAndrea0207/Nina_Carducci',
      size: 'medium',
    },
  ];

  const getGridClass = (size: Project['size']) => {
    switch (size) {
      case 'large':
        return 'md:col-span-1 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-0 md:min-h-screen px-8 py-16 md:py-32"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">
            Selected Work
          </p>

          <h2
            className="text-5xl md:text-7xl mb-20 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[300px] gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${getGridClass(project.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -10, opacity: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { x: 0, opacity: 1 }
                      : { x: -10, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300"
                >
                  <span className="text-sm uppercase tracking-wider">View Project</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    </section>
  );
}
