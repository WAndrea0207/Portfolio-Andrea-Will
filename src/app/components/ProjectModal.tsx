import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { ProjectDetail } from '../types/projects';

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-secondary border border-foreground/10 rounded-lg max-w-lg w-full p-6 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-foreground/50 hover:text-accent flex-shrink-0 ml-4"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-4 text-foreground/70">
                <div>
                  <h3 className="text-accent text-xs uppercase tracking-wider mb-2">Context</h3>
                  <p className="text-sm leading-relaxed">{project.context}</p>
                </div>

                <div>
                  <h3 className="text-accent text-xs uppercase tracking-wider mb-2">Objectives</h3>
                  <ul className="space-y-1">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-accent text-xs uppercase tracking-wider mb-2">Stack</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.technicalStack.frontend && (
                      <div>
                        <p className="text-xs text-accent/70 mb-1">Frontend</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technicalStack.frontend.map((t) => (
                            <span key={t} className="text-xs px-2 py-0.5 bg-accent/10 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.technicalStack.backend && (
                      <div>
                        <p className="text-xs text-accent/70 mb-1">Backend</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technicalStack.backend.map((t) => (
                            <span key={t} className="text-xs px-2 py-0.5 bg-accent/10 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.technicalStack.tools && (
                      <div>
                        <p className="text-xs text-accent/70 mb-1">Tools</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technicalStack.tools.map((t) => (
                            <span key={t} className="text-xs px-2 py-0.5 bg-accent/10 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-accent text-xs uppercase tracking-wider mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.skillsDeveloped.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-0.5 bg-foreground/10 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-accent text-xs uppercase tracking-wider mb-2">Results</h3>
                  <p className="text-sm leading-relaxed">{project.results}</p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-accent text-background text-xs rounded-full hover:bg-accent/90 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
