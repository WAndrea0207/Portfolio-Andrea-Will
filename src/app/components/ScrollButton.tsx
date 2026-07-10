import { ChevronDown } from 'lucide-react';

interface ScrollButtonProps {
  targetId: string;
  label?: string;
  showArrow?: boolean;
}

export function ScrollButton({ targetId, label = 'Next', showArrow = true }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-6 py-3 text-accent hover:text-accent/80 transition-colors"
    >
      <span className="text-sm uppercase tracking-wider">{label}</span>
      {showArrow && <ChevronDown size={18} />}
    </button>
  );
}
