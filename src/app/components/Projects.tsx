import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { ProjectDetail } from '../types/projects';
import { ScrollButton } from './ScrollButton';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openProjectModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getGridClass = (size: ProjectDetail['size']) => {
    if (size === 'large') return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <>
      <section id="work" ref={sectionRef} className="min-h-0 md:min-h-screen px-8 py-16 md:py-32">
        <div className="max-w-[1600px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">Work</p>
            <h2 className="text-5xl md:text-7xl mb-20 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Recent Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[300px] gap-4">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${getGridClass(project.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectModal(project)}
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    initial={{ x: -10, opacity: 0 }}
                    animate={hoveredProject === project.id ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-accent hover:gap-3 transition-all bg-none border-none p-0 cursor-pointer"
                  >
                    <span className="text-sm uppercase tracking-wider">Learn More</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

          <div className="mt-12 flex justify-center">
            <ScrollButton targetId="contact" label="Contact" />
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </>
  );
}
