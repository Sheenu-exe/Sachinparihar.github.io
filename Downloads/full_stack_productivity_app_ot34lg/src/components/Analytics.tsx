import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import { GameCard } from "./GameCard";
import { StatCard } from "./StatCard";
import { TrendingUp, Calendar, Target, BookOpen, Clock, Award } from "lucide-react";

export function Analytics() {
  const { isDark } = useDarkMode();
  const analytics = useQuery(api.analytics.getAnalytics);
  const weeklyData = useQuery(api.analytics.getWeeklyData);
  const stats = useQuery(api.stats.getUserStats);

  if (!analytics || !stats) {
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

  const weeklyDataArray = weeklyData || [];
  const maxPoints = Math.max(...weeklyDataArray.map((d: any) => d.points), 1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
       
        className="text-center"
      >
        <h1 className={`text-4xl font-bold font-orbitron mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          BATTLE ANALYTICS
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Track your productivity warrior progress
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total XP"
          value={stats.totalPoints}
          icon="⭐"
          color="purple"
          delay={0.1}
        />
        <StatCard
          title="Current Level"
          value={stats.level}
          icon="🏆"
          color="yellow"
          delay={0.2}
        />
        <StatCard
          title="Active Streak"
          value={`${stats.streak} days`}
          icon="🔥"
          color="red"
          delay={0.3}
        />
        <StatCard
          title="This Week Points"
          value={analytics.thisWeekPoints}
          icon="📊"
          color="green"
          delay={0.4}
        />
      </div>

      {/* Weekly Progress Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GameCard>
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'
            }`}>
              <TrendingUp size={20} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Weekly XP Progress
            </h3>
          </div>
          
          <div className="space-y-4">
            {weeklyDataArray.map((day: any, index: number) => (
              <motion.div 
                key={day.day} 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`w-16 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {day.day}
                </div>
                <div className="flex-1">
                  <div className={`h-6 rounded-full ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  } overflow-hidden`}>
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(day.points / maxPoints) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
                <div className={`w-16 text-sm font-medium text-right ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {day.points} XP
                </div>
              </motion.div>
            ))}
          </div>
        </GameCard>
      </motion.div>

      {/* Activity Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                Quest Stats
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Completed
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stats.todosCompleted}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  This Week
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {analytics.tasksThisWeek}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Average Daily
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {analytics.avgDailyTodos}
                </span>
              </div>
            </div>
          </GameCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                Schedule Stats
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Completed
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stats.scheduleItemsCompleted}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  This Week
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {analytics.scheduleItemsThisWeek}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Hours Tracked
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  0h
                </span>
              </div>
            </div>
          </GameCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GameCard>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-500/10 text-purple-600'
              }`}>
                <BookOpen size={20} />
              </div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Journal Stats
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Entries
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stats.journalEntriesCreated}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  This Week
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {analytics.journalEntriesThisWeek}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Words Written
                </span>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  0
                </span>
              </div>
            </div>
          </GameCard>
        </motion.div>
      </div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GameCard>
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-500/10 text-yellow-600'
            }`}>
              <Award size={20} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Performance Insights
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Most Productive Day
              </h4>
              <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {analytics.bestDay || 'No data yet'}
              </div>
            </div>
            
            <div>
              <h4 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Best Streak
              </h4>
              <div className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                {stats.streak} days
              </div>
            </div>
          </div>
        </GameCard>
      </motion.div>
    </div>
  );
}
