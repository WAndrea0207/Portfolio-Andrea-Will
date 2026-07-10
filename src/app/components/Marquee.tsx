interface MarqueeProps {
  items: string[];
  duration?: number;
  direction?: 'left' | 'right';
}

export function Marquee({
  items,
  duration = 30,
  direction = 'left',
}: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden py-8 border-y border-foreground/10" aria-hidden="true">
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {/* Copie A */}
        {items.map((item, index) => (
          <span
            key={`a-${index}`}
            className="mx-8 text-2xl md:text-3xl font-semibold text-foreground/20 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {item}
            <span className="mx-8 text-accent/40">·</span>
          </span>
        ))}
        {/* Copie B */}
        {items.map((item, index) => (
          <span
            key={`b-${index}`}
            className="mx-8 text-2xl md:text-3xl font-semibold text-foreground/20 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {item}
            <span className="mx-8 text-accent/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
