// import React, { useEffect, useRef, useState } from "react";

// interface CountUpOnViewProps {
//   end: number;
//   duration?: number; // in ms
//   className?: string;
//   suffix?: string;
// }

// const CountUpOnView: React.FC<CountUpOnViewProps> = ({ end, duration = 1200, className = "", suffix = "+" }) => {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef<HTMLSpanElement | null>(null);

//   // Reset count and animation state when end or duration changes
//   useEffect(() => {
//     setCount(0);
//     setHasAnimated(false);
//   }, [end, duration]);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;
//     let animationFrame: number;
//     let start: number | null = null;
//     let observer: IntersectionObserver | null = null;

//     const animate = (timestamp: number) => {
//       if (start === null) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setCount(Math.floor(progress * end));
//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     const handleIntersect = (entries: IntersectionObserverEntry[]) => {
//       if (entries[0].isIntersecting && !hasAnimated) {
//         setHasAnimated(true);
//         animationFrame = requestAnimationFrame(animate);
//         if (observer) observer.disconnect();
//       }
//     };

//     observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.1 });
//     observer.observe(node);

//     return () => {
//       if (observer) observer.disconnect();
//       cancelAnimationFrame(animationFrame);
//     };
//     // eslint-disable-next-line
//   }, [end, duration, hasAnimated]);

//   return (
//     <span ref={ref} className={className}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// export default CountUpOnView;

import React, { useEffect, useRef, useState } from "react";

interface CountUpOnViewProps {
  end: number;
  duration?: number; // in ms
  className?: string;
  suffix?: string;
}

const CountUpOnView: React.FC<CountUpOnViewProps> = ({
  end,
  duration = 1200,
  className = "",
  suffix = "+",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let start: number | null = null;
    hasAnimatedRef.current = false;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const nextValue = Math.floor(progress * end);

      setCount(nextValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        setCount(0);
        animationFrameRef.current = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUpOnView;