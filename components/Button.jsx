import { motion } from "framer-motion";

const Button = ({ nameOf, isClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <button
        onClick={isClick}
        className="mt-4 absolute z-50 bg-[#ffff] text-sm font-medium py-2 px-6 rounded-md border-black border-2"
      >
        {nameOf}
      </button>
      <button
        disabled={true}
        className="mt-4 relative bg-[#1f9fae] text-sm font-medium py-[10px] px-[26px] rounded-md border-black border-2"
      >
        {nameOf}
      </button>
    </motion.div>
  );
};

export default Button;
