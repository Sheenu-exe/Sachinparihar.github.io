import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useDarkMode } from "../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";
import { GameCard } from "./GameCard";
import { Plus, Trash2, Calendar, Star } from "lucide-react";

export function TodoList() {
  const { isDark } = useDarkMode();
  const todos = useQuery(api.todos.list);
  const createTodo = useMutation(api.todos.create);
  const toggleTodo = useMutation(api.todos.toggle);
  const removeTodo = useMutation(api.todos.remove);

  const [isCreating, setIsCreating] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
    dueDate: "",
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      await createTodo({
        title: newTodo.title,
        description: newTodo.description || undefined,
        priority: newTodo.priority,
        dueDate: newTodo.dueDate ? new Date(newTodo.dueDate).getTime() : undefined,
      });
      
      setNewTodo({ title: "", description: "", priority: "medium", dueDate: "" });
      setIsCreating(false);
      toast.success("Quest created successfully!");
    } catch (error) {
      toast.error("Failed to create quest");
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleTodo({ id: id as any });
      toast.success("XP gained!");
    } catch (error) {
      toast.error("Failed to update quest");
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await removeTodo({ id: id as any });
      toast.success("Quest removed");
    } catch (error) {
      toast.error("Failed to remove quest");
    }
  };

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case "high":
        return {
          color: "bg-red-500",
          label: "High",
          points: 15,
        };
      case "medium":
        return {
          color: "bg-yellow-500",
          label: "Medium",
          points: 10,
        };
      case "low":
        return {
          color: "bg-green-500",
          label: "Low",
          points: 5,
        };
      default:
        return {
          color: "bg-gray-500",
          label: "Normal",
          points: 5,
        };
    }
  };

  if (!todos) {
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
      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className={`text-3xl font-bold font-orbitron ${isDark ? 'text-white' : 'text-gray-900'}`}>
            QUEST LOG
          </h1>
          <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Complete quests to earn XP and level up
          </p>
        </div>
        <motion.button
          onClick={() => setIsCreating(true)}
          className="btn-primary flex items-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus size={18} />
          <span>New Quest</span>
        </motion.button>
      </motion.div>

      {/* Create Quest Form */}
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
                }`}>Create New Quest</h3>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Quest Title
                  </label>
                  <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
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
                    placeholder="Add more details..."
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    className={`${isDark ? 'input-field-dark' : 'input-field'} h-16 resize-none`}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Priority
                    </label>
                    <select
                      value={newTodo.priority}
                      onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value as any })}
                      className={isDark ? 'input-field-dark' : 'input-field'}
                    >
                      <option value="low">Low (5 XP)</option>
                      <option value="medium">Medium (10 XP)</option>
                      <option value="high">High (15 XP)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={newTodo.dueDate}
                      onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                      className={isDark ? 'input-field-dark' : 'input-field'}
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
                    <span>Create Quest</span>
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

      {/* Quest List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🎮</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>No Active Quests</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Create your first quest to start earning XP!
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            {todos.map((todo, index) => {
              const config = getPriorityConfig(todo.priority);
              return (
                <motion.div
                  key={todo._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  layout
                >
                  <GameCard className={todo.completed ? 'opacity-60' : ''}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <motion.button
                          onClick={() => handleToggle(todo._id)}
                          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            todo.completed
                              ? "bg-green-500 border-green-500 text-white"
                              : `border-gray-400 hover:border-green-500 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {todo.completed && (
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
                            } ${todo.completed ? "line-through" : ""}`}>
                              {todo.title}
                            </h3>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white ${config.color}`}>
                              {config.label}
                            </span>
                          </div>
                          
                          {todo.description && (
                            <p className={`text-sm mb-2 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            } ${todo.completed ? "opacity-60" : ""}`}>
                              {todo.description}
                            </p>
                          )}
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Star size={12} className="text-yellow-500" />
                              <span className={`font-medium ${
                                isDark ? 'text-yellow-400' : 'text-yellow-600'
                              }`}>
                                {todo.points} XP
                              </span>
                            </div>
                            
                            {todo.dueDate && (
                              <div className="flex items-center space-x-1">
                                <Calendar size={12} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                                <span className={`${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {new Date(todo.dueDate).toLocaleDateString()}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        onClick={() => handleRemove(todo._id)}
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
