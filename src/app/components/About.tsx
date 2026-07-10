import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ScrollButton } from './ScrollButton';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: string[] = [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Docker',
    'Git',
    'Figma',
    'REST APIs',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-0 md:min-h-screen flex items-center px-8 py-16 md:py-32"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-12">
            About
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className="text-4xl md:text-5xl mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                Full-stack Developper
              </h2>

              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  I started out in audiovisual production, with a Master's degree and a year working in a production company before deciding to move into web development in August 2024, starting out as a self-taught developer. 
                  Cinema has always been my main passion, and it still shapes how I think about stories, pacing, and atmosphere in the interfaces I design.
                </p>
                <p>
                  Today, I'm a frontend developer in a one-year work-study program at Orange with OpenClassrooms, where I learn by shipping real projects rather than just following theory.
                  I like building clean, user-focused web experiences and I bring the same attention to detail I had in production industry.
                
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3
                className="text-2xl mb-8"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
              >
                Skills & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="px-5 py-2.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm tracking-wide hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>

        

        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="mt-12 flex justify-center">
          <ScrollButton targetId="experience" label="Next" />
        </div>
      </div>
    </section>
  );
}
