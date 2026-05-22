import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const skills = [
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
      className="min-h-screen flex items-center px-8 py-32"
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
                Building digital products with precision and passion
              </h2>

              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I specialize
                  in creating scalable web applications that combine cutting-edge technology
                  with intuitive user experiences.
                </p>
                <p>
                  I believe in writing clean, maintainable code and collaborating closely
                  with designers and product teams to deliver exceptional digital products.
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
      </div>
    </section>
  );
}
