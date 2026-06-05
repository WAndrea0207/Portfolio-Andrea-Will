import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee
        items={['React', 'TypeScript', 'Node.js', 'Tailwind', 'Figma', 'Git', 'Docker', 'MySQL']}
        duration={25}
      />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
