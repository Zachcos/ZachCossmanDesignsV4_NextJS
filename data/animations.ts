const easing = [0.6, -0.5, 0.01, 0.99];

const fadeUpIn = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease: easing } },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, staggerChildren: 0.05 },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export { easing, fadeUpIn, stagger };
