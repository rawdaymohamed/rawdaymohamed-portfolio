import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
  hover: {
    scale: 1,
  },
  tap: {
    scale: 0.95,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      className="links"
      variants={variants}
      initial="closed"
      animate="open"
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover="hover"
          initial={{ scale: 0.9 }}
          whileTap="tap"
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
