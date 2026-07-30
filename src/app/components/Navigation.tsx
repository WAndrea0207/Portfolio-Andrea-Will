import { motion } from 'motion/react';

export function Navigation() {
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
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-background border-b border-foreground/10"
    >
      <div className="max-w-[1600px] mx-auto flex justify-end items-center gap-4 sm:gap-6 md:gap-12">
        <button
          onClick={() => scrollToSection('about')}
          className="uppercase tracking-wider text-[10px] sm:text-xs md:text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="uppercase tracking-wider text-[10px] sm:text-xs md:text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          Background
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="uppercase tracking-wider text-[10px] sm:text-xs md:text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="uppercase tracking-wider text-[10px] sm:text-xs md:text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
