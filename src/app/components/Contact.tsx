import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="max-w-[1600px] w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-8">
            Get In Touch
          </p>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-12 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            LET'S WORK
            <br />
            TOGETHER
          </h2>

          <p className="text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and creative ideas.
          </p>

          <motion.a
            href="mailto:willandrea0207@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-background text-lg tracking-wide hover:bg-accent/90 transition-all duration-300 rounded-full group"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            <Mail size={20} />
            <span>Send me an email</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-16"
          >
            <a
              href="https://github.com/WAndrea0207"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrea-will/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-32 pt-8 border-t border-foreground/10"
        >
          <p className="text-foreground/40 text-sm">
            © 2026 Andrea Will. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
