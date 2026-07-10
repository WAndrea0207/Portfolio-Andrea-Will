import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ScrollButton } from './ScrollButton';

interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: '2025 - 2026',
    title: 'Full-Stack Web Developer — Work-Study',
    place: 'Orange x OpenClassrooms',
    description:
      'Full-stack apprenticeship at Orange while completing the OpenClassrooms program. Building production-oriented projects with React, Node.js, MongoDB and SEO optimization.',
  },
  {
    year: '2024 - 2025',
    title: 'Web Developer — Self-Taught',
    place: 'Personal Learning',
    description:
      'Intensive learning of HTML, CSS, JavaScript, then React and Node.js through personal projects and online resources.',
  },
  {
    year: '2022 - 2024',
    title: 'Master\'s Degree, Audiovisual Production',
    place: 'ESRA',
    description:
      'Project management, team coordination, post-production. Development of rigor and creativity skills.',
  },
  {
    year: '2020 - 2022',
    title: 'Bachelor\'s Degree, Administration & Economics',
    place: 'University',
    description:
      'Economic and social administration. Foundations in management, law, and economics.',
  },
  {
    year: '2018 - 2020',
    title: 'DUT, Business Management',
    place: 'IUT',
    description:
      'Business administration and management. Accounting, management, digital tools.',
  },
];

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="experience"
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
            Background
          </p>

          <h2
            className="text-5xl md:text-7xl mb-20 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Ligne verticale */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgb(255 255 255 / 0.1) 15%, rgb(255 255 255 / 0.1) 85%, transparent 100%)',
            }}
          />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2 md:mt-0" />

                {/* Carte */}
                <div
                  className={`ml-10 md:ml-0 md:w-[45%] p-6 rounded-lg border border-foreground/10 bg-secondary/50 ${
                    isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span className="text-accent text-sm font-semibold tracking-wide">
                    {item.year}
                  </span>
                  <h3
                    className="text-xl mt-2 mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-foreground/50 text-sm mb-3">{item.place}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="mt-12 flex justify-center">
          <ScrollButton targetId="work" label="Next" />
        </div>
      </div>
    </section>
  );
}
