

export const fadeSlide = (
  fromX: number = -20,
  toX: number = 0,
  exitX: number = 30,
  duration: number = 0.6
) => ({
  initial: { opacity: 0, x: fromX },
  animate: { opacity: 1, x: toX },
  exit: { opacity: 0, x: exitX },
  transition: { duration, ease: 'easeOut' },
});

export const fadeIn = (
  duration: number = 0.6,
  delay: number = 0
) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: 'easeOut' },
});

export const slideDown = (
  fromY: number = -50,
  toY: number = 0,
  duration: number = 0.5,
  delay: number = 0
) => ({
  initial: { opacity: 0, y: fromY },
  animate: { opacity: 1, y: toY },
  exit: { opacity: 0, y: fromY },
  transition: { duration, delay, ease: 'easeOut' },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0},
};
export const slideInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export const fadessUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.4 } },
};
export const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export const slideFadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};