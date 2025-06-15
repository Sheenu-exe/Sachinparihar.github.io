import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: 'purple' | 'blue' | 'green' | 'yellow' | 'red';
  delay?: number;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  color = 'purple', 
  delay = 0 
}: StatCardProps) {
  const { isDark } = useDarkMode();

  const colorClasses = {
    purple: isDark ? 'from-purple-600 to-purple-700' : 'from-purple-500 to-purple-600',
    blue: isDark ? 'from-blue-600 to-blue-700' : 'from-blue-500 to-blue-600',
    green: isDark ? 'from-green-600 to-green-700' : 'from-green-500 to-green-600',
    yellow: isDark ? 'from-yellow-600 to-yellow-700' : 'from-yellow-500 to-yellow-600',
    red: isDark ? 'from-red-600 to-red-700' : 'from-red-500 to-red-600',
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl p-4 text-white
        bg-gradient-to-br ${colorClasses[color]}
        shadow-sm hover:shadow-md transition-all duration-200
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium mb-1">
            {title}
          </p>
          <p className="text-white text-2xl font-bold">
            {value}
          </p>
        </div>
        <div className="text-3xl opacity-80">
          {icon}
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
        <div className="w-full h-full rounded-full bg-white transform translate-x-6 -translate-y-6" />
      </div>
    </motion.div>
  );
}
