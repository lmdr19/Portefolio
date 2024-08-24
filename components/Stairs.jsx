import { motion } from "framer-motion";
//Variables

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
//alculate the reverse index fat straggred delay
const reverseIndex = (index) => {
  const totalSteps = 8; //nombre de pas
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* rendre les 6 motions div , chaqu'un represente une marche d'escalier */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
