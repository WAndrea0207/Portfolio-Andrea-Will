import { motion } from 'motion/react';

export function Navigation() {
  // "id: string" = on dit que le paramètre id doit être du texte
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-[1600px] mx-auto flex justify-end items-center gap-12">
        <button
          onClick={() => scrollToSection('work')}
          className="uppercase tracking-wider text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="uppercase tracking-wider text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="uppercase tracking-wider text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
