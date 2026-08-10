import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>
        {children}
      </motion.div>
    </div>
  );
}
