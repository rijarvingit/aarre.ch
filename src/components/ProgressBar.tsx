import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const location = useLocation();

  // Map routes to progress steps
  const getStep = () => {
    if (location.pathname === '/') return 0; // Landing
    if (location.pathname === '/main') return 1;
    if (location.pathname === '/technology') return 2;
    if (location.pathname === '/security') return 3;
    return 0;
  };

  const currentStep = getStep();
  const steps = ['/', '/main', '/technology', '/security'];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-2">
      {steps.map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            backgroundColor: index <= currentStep ? 'rgba(239, 68, 68, 0.8)' : 'rgba(255, 255, 255, 0.2)'
          }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 rounded-full"
          style={{
            border: index <= currentStep ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)'
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
