import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";
import { GameCard } from "./GameCard";
import { Plus, Clock, Calendar, Star, Trash2 } from "lucide-react";

export function Schedule() {
  const { isDark } = useDarkMode();
  const todayDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const scheduleItems = useQuery(api.schedule.listByDate, { date: selectedDate });
  const createScheduleItem = useMutation(api.schedule.create);
  const toggleScheduleItem = useMutation(api.schedule.toggle);
  const removeScheduleItem = useMutation(api.schedule.remove);

  const [isCreating, setIsCreating] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title.trim() || !newItem.startTime || !newItem.endTime) return;

    try {
      const startTime = new Date(`${selectedDate}T${newItem.startTime}`).getTime();
      const endTime = new Date(`${selectedDate}T${newItem.endTime}`).getTime();

      if (endTime <= startTime) {
        toast.error("End time must be after start time");
        return;
      }

      await createScheduleItem({
        title: newItem.title,
        description: newItem.description || undefined,
        startTime,
        endTime,
        date: selectedDate,
      });
      
      setNewItem({ title: "", description: "", startTime: "", endTime: "" });
      setIsCreating(false);
      toast.success("Schedule item created!");
    } catch (error) {
      toast.error("Failed to create schedule item");
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleScheduleItem({ id: id as any });
      toast.success("XP gained!");
    } catch (error) {
      toast.error("Failed to update schedule item");
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await removeScheduleItem({ id: id as any });
      toast.success("Schedule item removed");
    } catch (error) {
      toast.error("Failed to remove schedule item");
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getDuration = (start: number, end: number) => {
    const hours = (end - start) / (1000 * 60 * 60);
    return hours.toFixed(1);
  };

  if (!scheduleItems) {
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

  return (
    <div className="space-y-6">
      <div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className={`text-3xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-gray-900'}`}>
            MISSION SCHEDULE
          </h1>
          <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Plan your daily missions and earn XP
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Calendar size={18} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={isDark ? 'input-field-dark' : 'input-field'}
            />
          </div>
          <motion.button
            onClick={() => setIsCreating(true)}
            className="btn-primary flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={18} />
            <span>New Mission</span>
          </motion.button>
        </div>
      </div>

      {/* Create Schedule Item Form */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <GameCard>
              <form onSubmit={handleCreate} className="space-y-4">
                <h3 className={`text-lg font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Create New Mission</h3>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Mission Title
                  </label>
                  <input
                    type="text"
                    placeholder="What's your mission?"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className={isDark ? 'input-field-dark' : 'input-field'}
                    required
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Description (optional)
                  </label>
                  <textarea
                    placeholder="Mission details..."
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className={`${isDark ? 'input-field-dark' : 'input-field'} h-16 resize-none`}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={newItem.startTime}
                      onChange={(e) => setNewItem({ ...newItem, startTime: e.target.value })}
                      className={isDark ? 'input-field-dark' : 'input-field'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      End Time
                    </label>
                    <input
                      type="time"
                      value={newItem.endTime}
                      onChange={(e) => setNewItem({ ...newItem, endTime: e.target.value })}
                      className={isDark ? 'input-field-dark' : 'input-field'}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    type="submit"
                    className="btn-success flex items-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Create Mission</span>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsCreating(false)}
                    className="btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </GameCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schedule List */}
      <div className="space-y-3">
        {scheduleItems.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🗓️</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>No Missions Scheduled</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Schedule your first mission to start earning XP!
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                layout
              >
                <GameCard className={item.completed ? 'opacity-60' : ''}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <motion.button
                        onClick={() => handleToggle(item._id)}
                        className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          item.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : `border-gray-400 hover:border-green-500 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.completed && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-xs"
                          >
                            ✓
                          </motion.span>
                        )}
                      </motion.button>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-medium ${
                            isDark ? 'text-white' : 'text-gray-900'
                          } ${item.completed ? "line-through" : ""}`}>
                            {item.title}
                          </h3>
                        </div>
                        
                        {item.description && (
                          <p className={`text-sm mb-2 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          } ${item.completed ? "opacity-60" : ""}`}>
                            {item.description}
                          </p>
                        )}
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Clock size={12} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                            <span className={`${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {formatTime(item.startTime)} - {formatTime(item.endTime)}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Star size={12} className="text-yellow-500" />
                            <span className={`font-medium ${
                              isDark ? 'text-yellow-400' : 'text-yellow-600'
                            }`}>
                              {item.points} XP
                            </span>
                          </div>
                          
                          <span className={`text-xs px-2 py-1 rounded ${
                            isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'
                          }`}>
                            {getDuration(item.startTime, item.endTime)}h
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => handleRemove(item._id)}
                      className={`p-1.5 rounded transition-colors ${
                        isDark 
                          ? 'text-gray-500 hover:text-red-400 hover:bg-gray-700' 
                          : 'text-gray-400 hover:text-red-600 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </div>
                </GameCard>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
