import { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

type Phase = 'typing' | 'pausing' | 'deleting';

export function Typewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (phase === 'typing') {
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setPhase('typing');
      }
    }
  }, [displayText, phase, phraseIndex, phrases]);

  useEffect(() => {
    let delay: number;
    if (phase === 'pausing') {
      delay = pauseDuration;
    } else if (phase === 'deleting') {
      delay = deletingSpeed;
    } else {
      delay = typingSpeed;
    }

    const timeout = setTimeout(() => {
      if (phase === 'pausing') {
        setPhase('deleting');
      } else {
        tick();
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [tick, phase, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
