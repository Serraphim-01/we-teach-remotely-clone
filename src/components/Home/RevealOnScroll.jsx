import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const directionVariants = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  bottom: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function RevealOnScroll({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 0.6,
  once = true,
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 });

  const variants = directionVariants[direction] || directionVariants.bottom;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
