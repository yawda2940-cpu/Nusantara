import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0.2 means 20% movement
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "", 
  speed = 0.15,
  onError
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={{
          y,
          scale: 1 + (speed * 2), // Prevent edges from showing
        }}
        onError={onError}
      />
    </div>
  );
}
