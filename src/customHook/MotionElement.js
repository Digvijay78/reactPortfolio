// MotionElement.js
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionElement = ({ children, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={container}>
      {children}
    </motion.div>
  );
};

export default MotionElement;
