import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export const useAnimateElemInView = () => {
  // ANIMATION WITH FRAMER MOTION AND REACT-INTERSECTION OBSERVER
  const { ref, inView } = useInView();
  const control = useAnimation();
  const visibleVariant = {
    visible: {
      transition: { duration: 0.3 },
    },
    hidden: {},
    exit: {},
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return [ref, control, visibleVariant];
};
