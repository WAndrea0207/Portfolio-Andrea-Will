import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

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

  const projects = [
    {
      id: 1,
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics platform for ML model performance monitoring',
      image: 'https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'D3.js', 'Python'],
      size: 'large',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Headless commerce solution with custom CMS',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      size: 'medium',
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Component library for enterprise applications',
      image: 'https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Storybook', 'Tailwind'],
      size: 'medium',
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Scalable microservices architecture on AWS',
      image: 'https://images.unsplash.com/photo-1687125114671-d45714b4631d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      size: 'small',
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Cross-platform financial services application',
      image: 'https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      size: 'small',
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      description: 'B2B analytics and reporting platform',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc4ODU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'GraphQL', 'Redis'],
      size: 'large',
    },
  ];

  const getGridClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen px-8 py-32"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4">
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

                <motion.button
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
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    </section>
  );
}
