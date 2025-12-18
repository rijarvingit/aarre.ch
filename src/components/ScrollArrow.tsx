import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  targetId?: string;
}

const ScrollArrow = ({ targetId }: ScrollArrowProps) => {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If no targetId, scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="group cursor-pointer focus:outline-none"
      aria-label="Scroll down"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1"
      >
        <ChevronDown className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors" strokeWidth={2.5} />
        <ChevronDown className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors -mt-4 opacity-60" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollArrow;
