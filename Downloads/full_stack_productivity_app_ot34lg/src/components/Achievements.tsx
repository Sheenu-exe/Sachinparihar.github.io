import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import { GameCard } from "./GameCard";
import { Trophy, Star, Target, Calendar, BookOpen, Zap, Award, Lock, Share2, Instagram, Twitter, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Achievements() {
  const { isDark } = useDarkMode();
  const achievements = useQuery(api.achievements.getUserAchievements);
  const stats = useQuery(api.stats.getUserStats);
  const [shareMenuOpen, setShareMenuOpen] = useState<string | null>(null);

  if (!achievements || !stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <motion.div 
          className={`w-8 h-8 border-2 rounded-full ${
            isDark ? 'border-purple-400 border-t-transparent' : 'border-purple-600 border-t-transparent'
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  const allAchievements = [
    {
      id: "first_quest",
      title: "First Quest",
      description: "Complete your first task",
      icon: "🎯",
      category: "tasks",
      requirement: 1,
      current: stats.todosCompleted,
      unlocked: achievements.some(a => a.id === "first_task"),
    },
    {
      id: "quest_master",
      title: "Quest Master",
      description: "Complete 50 tasks",
      icon: "⚔️",
      category: "tasks",
      requirement: 50,
      current: stats.todosCompleted,
      unlocked: achievements.some(a => a.id === "task_master"),
    },
    {
      id: "level_up",
      title: "Level Up",
      description: "Reach level 5",
      icon: "📈",
      category: "level",
      requirement: 5,
      current: stats.level,
      unlocked: achievements.some(a => a.id === "level_up"),
    },
    {
      id: "warrior",
      title: "Productivity Warrior",
      description: "Reach level 10",
      icon: "🏆",
      category: "level",
      requirement: 10,
      current: stats.level,
      unlocked: achievements.some(a => a.id === "productivity_guru"),
    },
    {
      id: "streak_starter",
      title: "Streak Starter",
      description: "Maintain a 7-day streak",
      icon: "🔥",
      category: "streak",
      requirement: 7,
      current: stats.streak,
      unlocked: achievements.some(a => a.id === "streak_keeper"),
    },
    {
      id: "streak_master",
      title: "Streak Master",
      description: "Maintain a 30-day streak",
      icon: "🌟",
      category: "streak",
      requirement: 30,
      current: stats.streak,
      unlocked: achievements.some(a => a.id === "streak_keeper"),
    },
    {
      id: "journal_keeper",
      title: "Journal Keeper",
      description: "Write 10 journal entries",
      icon: "📖",
      category: "journal",
      requirement: 10,
      current: stats.journalEntriesCreated,
      unlocked: achievements.some(a => a.id === "journal_writer"),
    },
    {
      id: "storyteller",
      title: "Storyteller",
      description: "Write 50 journal entries",
      icon: "✍️",
      category: "journal",
      requirement: 50,
      current: stats.journalEntriesCreated,
      unlocked: achievements.some(a => a.id === "reflection_master"),
    },
    {
      id: "xp_collector",
      title: "XP Collector",
      description: "Earn 1000 total XP",
      icon: "⭐",
      category: "xp",
      requirement: 1000,
      current: stats.totalPoints,
      unlocked: achievements.some(a => a.id === "point_collector"),
    },
    {
      id: "legend",
      title: "Legend",
      description: "Earn 5000 total XP",
      icon: "👑",
      category: "xp",
      requirement: 5000,
      current: stats.totalPoints,
      unlocked: achievements.some(a => a.id === "point_collector"),
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tasks": return <Target size={16} />;
      case "level": return <Trophy size={16} />;
      case "streak": return <Zap size={16} />;
      case "journal": return <BookOpen size={16} />;
      case "xp": return <Star size={16} />;
      default: return <Award size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tasks": return "green";
      case "level": return "yellow";
      case "streak": return "red";
      case "journal": return "purple";
      case "xp": return "blue";
      default: return "gray";
    }
  };

  const generateShareText = (achievement: any) => {
    return `🎉 Just unlocked "${achievement.title}" achievement in ProductivityHub! ${achievement.icon} ${achievement.description} #ProductivityWarrior #LevelUp #Achievement`;
  };

  const shareToInstagram = (achievement: any) => {
    const text = generateShareText(achievement);
    // Instagram doesn't support direct text sharing via URL, so we copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Achievement text copied! Paste it in your Instagram story or post.");
      window.open('https://www.instagram.com/', '_blank');
    }).catch(() => {
      toast.error("Failed to copy text");
    });
    setShareMenuOpen(null);
  };

  const shareToTwitter = (achievement: any) => {
    const text = generateShareText(achievement);
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShareMenuOpen(null);
  };

  const shareToWhatsApp = (achievement: any) => {
    const text = generateShareText(achievement);
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShareMenuOpen(null);
  };

  const unlockedCount = allAchievements.filter(a => a.unlocked).length;
  const progressPercentage = (unlockedCount / allAchievements.length) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
       
        className="text-center"
      >
        <h1 className={`text-4xl font-bold font-orbitron mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          HALL OF FAME
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Your legendary achievements and milestones
        </p>
      </div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <GameCard>
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-500/10 text-yellow-600'
            }`}>
              <Trophy size={24} />
            </div>
            <div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Achievement Progress
              </h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {unlockedCount} of {allAchievements.length} achievements unlocked
              </p>
            </div>
          </div>
          
          <div className={`w-full h-3 rounded-full ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          } overflow-hidden`}>
            <motion.div 
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {progressPercentage.toFixed(1)}% Complete
            </span>
            <span className={`font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {unlockedCount}/{allAchievements.length}
            </span>
          </div>
        </GameCard>
      </motion.div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allAchievements.map((achievement, index) => {
          const progress = Math.min((achievement.current / achievement.requirement) * 100, 100);
          const categoryColor = getCategoryColor(achievement.category);
          
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <GameCard className={`relative overflow-hidden ${
                achievement.unlocked ? '' : 'opacity-75'
              }`}>
                {/* Achievement Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                    achievement.unlocked
                      ? isDark ? 'bg-yellow-500/20' : 'bg-yellow-500/10'
                      : isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {achievement.unlocked ? achievement.icon : <Lock size={20} className="text-gray-500" />}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded text-xs ${
                      categoryColor === 'green' ? 'bg-green-500/20 text-green-400' :
                      categoryColor === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                      categoryColor === 'red' ? 'bg-red-500/20 text-red-400' :
                      categoryColor === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                      categoryColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {getCategoryIcon(achievement.category)}
                      <span className="capitalize">{achievement.category}</span>
                    </div>

                    {/* Share Button - Only show for unlocked achievements */}
                    {achievement.unlocked && (
                      <div className="relative">
                        <motion.button
                          onClick={() => setShareMenuOpen(shareMenuOpen === achievement.id ? null : achievement.id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Share2 size={14} />
                        </motion.button>

                        {/* Share Menu */}
                        {shareMenuOpen === achievement.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            className={`absolute right-0 top-full mt-2 z-50 ${
                              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            } border rounded-lg shadow-lg p-2 min-w-[140px]`}
                          >
                            <button
                              onClick={() => shareToInstagram(achievement)}
                              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                                isDark 
                                  ? 'hover:bg-gray-700 text-gray-300' 
                                  : 'hover:bg-gray-100 text-gray-700'
                              }`}
                            >
                              <Instagram size={16} className="text-pink-500" />
                              <span className="text-sm">Instagram</span>
                            </button>
                            
                            <button
                              onClick={() => shareToTwitter(achievement)}
                              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                                isDark 
                                  ? 'hover:bg-gray-700 text-gray-300' 
                                  : 'hover:bg-gray-100 text-gray-700'
                              }`}
                            >
                              <Twitter size={16} className="text-blue-500" />
                              <span className="text-sm">X (Twitter)</span>
                            </button>
                            
                            <button
                              onClick={() => shareToWhatsApp(achievement)}
                              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                                isDark 
                                  ? 'hover:bg-gray-700 text-gray-300' 
                                  : 'hover:bg-gray-100 text-gray-700'
                              }`}
                            >
                              <MessageCircle size={16} className="text-green-500" />
                              <span className="text-sm">WhatsApp</span>
                            </button>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Achievement Info */}
                <div className="mb-4">
                  <h3 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Progress
                    </span>
                    <span className={`font-medium ${
                      achievement.unlocked 
                        ? isDark ? 'text-green-400' : 'text-green-600'
                        : isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {achievement.current}/{achievement.requirement}
                    </span>
                  </div>
                  
                  <div className={`w-full h-2 rounded-full ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className={`h-full rounded-full ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                          : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Unlocked Badge */}
                {achievement.unlocked && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-green-500 text-white' : 'bg-green-500 text-white'
                    }`}>
                      <span className="text-xs">✓</span>
                    </div>
                  </motion.div>
                )}
              </GameCard>
            </motion.div>
          );
        })}
      </div>

      {/* Click outside to close share menu */}
      {shareMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShareMenuOpen(null)}
        />
      )}
    </div>
  );
}
