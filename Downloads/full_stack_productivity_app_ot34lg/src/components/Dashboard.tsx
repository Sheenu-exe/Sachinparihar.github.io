import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { GameCard } from "./GameCard";
import { XPBar } from "./XPBar";
import { Trophy, Target, Calendar, BookOpen, Star } from "lucide-react";

export function Dashboard() {
  const { isDark } = useDarkMode();
  const stats = useQuery(api.stats.getUserStats);
  const todos = useQuery(api.todos.list);
  const todayDate = new Date().toISOString().split('T')[0];
  const scheduleItems = useQuery(api.schedule.listByDate, { date: todayDate });
  const journalEntries = useQuery(api.journal.getRecent);

  if (!stats || !todos || !scheduleItems || !journalEntries) {
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

  const completedTodos = todos.filter(t => t.completed).length;
  const completedSchedule = scheduleItems.filter(s => s.completed).length;
  const currentLevelXP = stats.totalPoints % 100;
  const nextLevelXP = 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className="text-center"
      >
        <h1 className={`text-5xl font-bold font-orbitron mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          COMMAND CENTER
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Level {stats.level} Productivity Warrior
        </p>
      </div>

      {/* XP Progress */}
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
                Level Progress
              </h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {currentLevelXP}/{nextLevelXP} XP to next level
              </p>
            </div>
          </div>
          <XPBar 
            currentXP={currentLevelXP} 
            maxXP={nextLevelXP} 
            level={stats.level}
          />
        </GameCard>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total XP"
          value={stats.totalPoints}
          icon="⭐"
          color="purple"
          delay={0.1}
        />
        <StatCard
          title="Quests Done"
          value={stats.todosCompleted}
          icon="✓"
          color="green"
          delay={0.2}
        />
        <StatCard
          title="Journal Entries"
          value={stats.journalEntriesCreated}
          icon="📖"
          color="blue"
          delay={0.3}
        />
        <StatCard
          title="Current Streak"
          value={`${stats.streak} days`}
          icon="🔥"
          color="red"
          delay={0.4}
        />
      </div>

      {/* Today's Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GameCard>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'
              }`}>
                <Target size={20} />
              </div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Today's Quests
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Progress
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {completedTodos}/{todos.length}
                </span>
              </div>
              
              <div className={`w-full h-2 rounded-full ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <motion.div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${todos.length > 0 ? (completedTodos / todos.length) * 100 : 0}%` 
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              
              {completedTodos === todos.length && todos.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-2"
                >
                  <span className="text-green-500 font-medium text-sm">All quests complete! 🎉</span>
                </motion.div>
              )}
            </div>
          </GameCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GameCard>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'
              }`}>
                <Calendar size={20} />
              </div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Today's Schedule
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Progress
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {completedSchedule}/{scheduleItems.length}
                </span>
              </div>
              
              <div className={`w-full h-2 rounded-full ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${scheduleItems.length > 0 ? (completedSchedule / scheduleItems.length) * 100 : 0}%` 
                  }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </div>
          </GameCard>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GameCard>
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-500/10 text-orange-600'
            }`}>
              <BookOpen size={20} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Recent Journal Entries
            </h3>
          </div>
          
          {journalEntries.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">📝</div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No journal entries yet. Start writing to earn XP!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {journalEntries.slice(0, 3).map((entry, index) => (
                <motion.div 
                  key={entry._id} 
                  className={`p-3 rounded-lg border-l-4 border-purple-500 ${
                    isDark ? 'bg-gray-700/30' : 'bg-gray-50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {entry.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm mt-1">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {entry.date}
                    </span>
                    <span className="capitalize">{entry.mood}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500" />
                      <span className="font-medium text-yellow-600">{entry.points} XP</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </GameCard>
      </motion.div>
    </div>
  );
}
