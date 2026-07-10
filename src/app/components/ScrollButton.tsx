import { ChevronDown } from 'lucide-react';

interface ScrollButtonProps {
  targetId: string;
  label?: string;
  showArrow?: boolean;
  className?: string;
}

export function ScrollButton({ targetId, label = 'Next', showArrow = true, className = '' }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/20 rounded-full hover:bg-accent/20 transition-all text-accent text-sm uppercase tracking-wider ${className}`}
    >
      <span>{label}</span>
      {showArrow && <ChevronDown size={18} />}
    </button>
  );
}
