interface MarqueeProps {
  items: string[];
  duration?: number;
  direction?: 'left' | 'right';
}

export function Marquee({
  items,
  duration = 25,
  direction = 'left',
}: MarqueeProps) {
  const track = items.map((item, index) => (
    <span
      key={index}
      className="mx-8 text-2xl md:text-3xl font-semibold text-foreground/20 uppercase tracking-widest"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {item}
      <span className="mx-8 text-accent/40">·</span>
    </span>
  ));

  return (
    <div className="w-full overflow-hidden py-8 border-y border-foreground/10" aria-hidden="true">
      <div
        className={`flex w-max ${direction === 'right' ? 'animate-marquee-right' : 'animate-marquee'}`}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
