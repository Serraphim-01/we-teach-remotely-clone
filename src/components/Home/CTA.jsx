import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      x: [0, 8, 0],
      opacity: 1,
      transition: {
        x: {
          repeat: Infinity,
          duration: 1,
          ease: 'easeInOut',
        },
        opacity: { duration: 0.3 }
      }
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      x: 0,
      opacity: 0,
      transition: { duration: 0.3 }
    });
  };

  return (
    <div className="text-center my-12">
      <a
        href="#apply"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className="group inline-flex items-center gap-3 bg-black text-[#18ece4] text-lg font-semibold px-6 py-3 rounded-3xl hover:bg-black/90 transition duration-300"
      >
        Become a Fully Remote Tutor
        <motion.span
          className="inline-block"
          animate={controls}
          initial={{ opacity: 0, x: 0 }}
        >
          <FaArrowRight />
        </motion.span>
      </a>
    </div>
  );
}
