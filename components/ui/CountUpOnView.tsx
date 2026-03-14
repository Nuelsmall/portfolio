import React, { useEffect, useRef, useState } from "react";

interface CountUpOnViewProps {
  end: number;
  duration?: number; // in ms
  className?: string;
  suffix?: string;
}

const CountUpOnView: React.FC<CountUpOnViewProps> = ({ end, duration = 1200, className = "", suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let animationFrame: number;
    let start: number | null = null;
    let observer: IntersectionObserver | null = null;

    setCount(0); // Reset count on mount or prop change
    setHasAnimated(false);

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setHasAnimated(true);
        animationFrame = requestAnimationFrame(animate);
        if (observer) observer.disconnect();
      }
    };

    observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.1 });
    observer.observe(node);

    return () => {
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
    // eslint-disable-next-line
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUpOnView;
