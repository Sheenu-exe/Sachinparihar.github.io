import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface GameCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GameCard({ 
  children, 
  className = "", 
  hover = true
}: GameCardProps) {
  const { isDark } = useDarkMode();

  return (
    <motion.div
      className={`
        relative rounded-xl border p-6 transition-all duration-200
        ${isDark 
          ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' 
          : 'bg-white/80 border-gray-200 backdrop-blur-sm'
        }
        ${hover ? 'hover:shadow-lg hover:-translate-y-0.5' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { 
        scale: 1.01,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  );
}
