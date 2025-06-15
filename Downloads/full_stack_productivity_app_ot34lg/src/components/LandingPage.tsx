import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { useDarkMode } from "../hooks/useDarkMode";
import { Trophy, Target, Calendar, BookOpen, TrendingUp, Zap, Sun, Moon } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const { isDark, toggle } = useDarkMode();

  const features = [
    {
      icon: <Target size={24} />,
      title: "Quest System",
      description: "Turn your tasks into epic quests and earn XP for completion",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Calendar size={24} />,
      title: "Mission Scheduler",
      description: "Plan your daily missions and track your productivity",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Battle Journal",
      description: "Document your journey and reflect on your progress",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Trophy size={24} />,
      title: "Achievement System",
      description: "Unlock badges and climb the leaderboards",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Analytics Dashboard",
      description: "Track your performance with detailed insights",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Zap size={24} />,
      title: "Level Up System",
      description: "Gain XP, level up, and become a productivity warrior",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    } relative overflow-hidden`}>
      <ParticleBackground />
      
      {/* Header */}
      <motion.header 
        className="relative z-10 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${
              isDark ? 'bg-purple-600 text-white' : 'bg-purple-600 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            P
          </motion.div>
          <span className={`text-xl font-bold font-orbitron ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            ProductivityHub
          </span>
        </div>
        
        <motion.button
          onClick={toggle}
          className={`p-2 rounded-lg transition-colors ${
            isDark 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className={`text-6xl md:text-7xl font-bold font-orbitron mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            LEVEL UP YOUR
            <br />
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-purple-400 to-blue-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              PRODUCTIVITY
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transform your daily tasks into epic quests. Earn XP, unlock achievements, 
            and become the productivity warrior you were meant to be.
          </motion.p>
          
          <motion.button
            onClick={onGetStarted}
            className="btn-primary text-lg px-8 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Quest
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/80 border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Preview */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className={`text-3xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Join the Productivity Warriors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "Level 15", label: "Average Level" },
              { value: "2,847", label: "Total XP Earned" },
              { value: "156", label: "Quests Completed" },
              { value: "42", label: "Achievements Unlocked" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/80 border-gray-200'
                } backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <div className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Begin Your Journey?
          </h2>
          <motion.button
            onClick={onGetStarted}
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the Arena
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
