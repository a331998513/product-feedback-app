export const pageVariants = {
  initial: {
    opacity: 0,
    x: "10vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "-10vw",
  },
};
export const roadMapVariants = {
  initial: {
    opacity: 0,
    x: "10vw",
  },
  in: {
    opacity: 1,
    x: "0",
    transition: { delay: 0.2, type: "spring", duration: 1 },
  },
  out: {
    opacity: 0,
    x: "-10vw",
    transition: { type: "spring", duration: 1 },
  },
};
export const emptyVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, type: "spring", duration: 0.5 },
  },
};
export const feedbackVariants = {
  stop: {
    opacity: 1,
    y: 0,
  },
  initial: {
    y: "10vh",
    opacity: 0,
    transition: { duration: 0.2 },
  },
  in: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3 },
  },
  out: {
    y: "-10vh",
    opacity: 0,
    transition: { type: "spring", duration: 0.6 },
  },
};

export const pageTransition = {
  duration: 0.6,
  type: "spring",
};
