import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInFromRightProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const SlideInFromRight: React.FC<SlideInFromRightProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
    initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ type: "tween", duration: 1, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;
