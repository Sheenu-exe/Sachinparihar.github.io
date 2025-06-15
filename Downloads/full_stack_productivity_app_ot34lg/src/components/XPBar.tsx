import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
import { useEffect, useState } from 'react';

interface XPBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
  className?: string;
}

export function XPBar({ currentXP, maxXP, level, className = "" }: XPBarProps) {
  const { isDark } = useDarkMode();
  const progress = Math.min((currentXP / maxXP) * 100, 100);
  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
    }
  }, [progress]);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Level {level}
        </span>
        <span className={`text-xs ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {currentXP}/{maxXP} XP
        </span>
      </div>
      
      <div className={`relative h-3 rounded-full overflow-hidden ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut" 
          }}
          style={{ width: '30%' }}
        />
      </div>
      
      {/* Level up notification */}
      {showLevelUp && (
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
        >
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isDark 
              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
              : 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20'
          }`}>
            Level Up! 🎉
          </div>
        </motion.div>
      )}
    </div>
  );
}
