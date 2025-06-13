  // components/common/SlideInFromLeft.tsx
  import React from "react";
  import { motion } from "framer-motion";
  import { useInView } from "react-intersection-observer";

  interface SlideInFromTopProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }
const SlideInFromTop: React.FC<SlideInFromTopProps> = ({
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
      initial={{ y: "-10vh", opacity: 0 }} // <- negative Y for slide from top
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "tween", duration: 1, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
  export default SlideInFromTop;
