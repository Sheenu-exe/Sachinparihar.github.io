import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";
import { GameCard } from "./GameCard";
import { Plus, BookOpen, Calendar, Star, Trash2, Smile, Meh, Frown } from "lucide-react";

export function Journal() {
  const { isDark } = useDarkMode();
  const todayDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const journalEntries = useQuery(api.journal.listByDate, { date: selectedDate });
  const createJournalEntry = useMutation(api.journal.create);
  const removeJournalEntry = useMutation(api.journal.remove);

  const [isCreating, setIsCreating] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    mood: "neutral" as "excellent" | "good" | "neutral" | "bad" | "terrible",
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;

    try {
      await createJournalEntry({
        title: newEntry.title,
        content: newEntry.content,
        date: selectedDate,
        mood: newEntry.mood,
      });
      
      setNewEntry({ title: "", content: "", mood: "neutral" });
      setIsCreating(false);
      toast.success("Journal entry created! XP gained!");
    } catch (error) {
      toast.error("Failed to create journal entry");
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await removeJournalEntry({ id: id as any });
      toast.success("Journal entry removed");
    } catch (error) {
      toast.error("Failed to remove journal entry");
    }
  };

  const getMoodConfig = (mood: string) => {
    switch (mood) {
      case "excellent":
        return { emoji: "😄", color: "text-green-500", bg: "bg-green-500/20", label: "Excellent" };
      case "good":
        return { emoji: "😊", color: "text-blue-500", bg: "bg-blue-500/20", label: "Good" };
      case "neutral":
        return { emoji: "😐", color: "text-yellow-500", bg: "bg-yellow-500/20", label: "Neutral" };
      case "bad":
        return { emoji: "😞", color: "text-orange-500", bg: "bg-orange-500/20", label: "Bad" };
      case "terrible":
        return { emoji: "😢", color: "text-red-500", bg: "bg-red-500/20", label: "Terrible" };
      default:
        return { emoji: "😐", color: "text-gray-500", bg: "bg-gray-500/20", label: "Unknown" };
    }
  };

  if (!journalEntries) {
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
      {/* Header */}
      <div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        
      >
        <div>
          <h1 className={`text-3xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-gray-900'}`}>
            MISSION LOG
          </h1>
          <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Document your journey and earn XP for reflection
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
            <span>New Entry</span>
          </motion.button>
        </div>
      </div>

      {/* Create Journal Entry Form */}
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
                }`}>Create New Log Entry</h3>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Entry Title
                  </label>
                  <input
                    type="text"
                    placeholder="What happened today?"
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                    className={isDark ? 'input-field-dark' : 'input-field'}
                    required
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    How are you feeling?
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { value: "excellent", emoji: "😄", label: "Excellent" },
                      { value: "good", emoji: "😊", label: "Good" },
                      { value: "neutral", emoji: "😐", label: "Neutral" },
                      { value: "bad", emoji: "😞", label: "Bad" },
                      { value: "terrible", emoji: "😢", label: "Terrible" },
                    ].map((mood) => (
                      <motion.button
                        key={mood.value}
                        type="button"
                        onClick={() => setNewEntry({ ...newEntry, mood: mood.value as any })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          newEntry.mood === mood.value
                            ? isDark
                              ? 'border-purple-400 bg-purple-500/20'
                              : 'border-purple-500 bg-purple-500/10'
                            : isDark
                              ? 'border-gray-600 hover:border-gray-500'
                              : 'border-gray-300 hover:border-gray-400'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-2xl mb-1">{mood.emoji}</div>
                        <div className={`text-xs ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {mood.label}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Thoughts
                  </label>
                  <textarea
                    placeholder="Write about your day, thoughts, or experiences..."
                    value={newEntry.content}
                    onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                    className={`${isDark ? 'input-field-dark' : 'input-field'} h-32 resize-none`}
                    required
                  />
                  <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Longer entries earn more XP! ({newEntry.content.length} characters)
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    type="submit"
                    className="btn-success flex items-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Save Entry</span>
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

      {/* Journal Entries */}
      <div className="space-y-3">
        {journalEntries.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">📖</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>No Entries Yet</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Start writing to document your journey and earn XP!
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            {journalEntries.map((entry, index) => {
              const moodConfig = getMoodConfig(entry.mood);
              return (
                <motion.div
                  key={entry._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  layout
                >
                  <GameCard>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${moodConfig.bg}`}>
                          <span className="text-xl">{moodConfig.emoji}</span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className={`font-medium ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {entry.title}
                            </h3>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${moodConfig.color} ${moodConfig.bg}`}>
                              {moodConfig.label}
                            </span>
                          </div>
                          
                          <p className={`text-sm mb-3 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {entry.content}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Star size={12} className="text-yellow-500" />
                              <span className={`font-medium ${
                                isDark ? 'text-yellow-400' : 'text-yellow-600'
                              }`}>
                                {entry.points} XP
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <BookOpen size={12} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                              <span className={`${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {entry.content.length} characters
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        onClick={() => handleRemove(entry._id)}
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
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
