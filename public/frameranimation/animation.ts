

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
