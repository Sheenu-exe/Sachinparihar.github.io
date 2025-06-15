import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { Schedule } from "./components/Schedule";
import { Journal } from "./components/Journal";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { Analytics } from "./components/Analytics";
import { Achievements } from "./components/Achievements";
import { LandingPage } from "./components/LandingPage";
import { AuthPage } from "./components/AuthPage";
import { useDarkMode } from "./hooks/useDarkMode";
import { ParticleBackground } from "./components/ParticleBackground";
import { motion } from "framer-motion";
import { 
  Home, 
  Target, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Trophy, 
  User,
  Sun,
  Moon,
  LogOut
} from "lucide-react";

type Tab = "dashboard" | "todos" | "schedule" | "journal" | "analytics" | "achievements" | "profile";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [showAuth, setShowAuth] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const navItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "todos", label: "Quests", icon: Target },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "journal", label: "Journal", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "achievements", label: "Trophies", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    } font-inter relative`}>
      <ParticleBackground />
      
      <Authenticated>
        <div className="flex flex-col h-screen">

          {/* Main Content */}
          <main className="flex-1 overflow-auto pb-24 sm:pb-28">
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
              {activeTab === "dashboard" && <Dashboard />}
              {activeTab === "todos" && <TodoList />}
              {activeTab === "schedule" && <Schedule />}
              {activeTab === "journal" && <Journal />}
              {activeTab === "analytics" && <Analytics />}
              {activeTab === "achievements" && <Achievements />}
              {activeTab === "profile" && <Profile />}
            </div>
          </main>

          {/* Floating Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 bg-transparent pointer-events-none">
            <div className="pointer-events-auto max-w-md mx-auto">
              <motion.nav 
                className={`w-full ${
                  isDark ? 'bg-gray-800/95' : 'bg-white/95'
                } backdrop-blur-xl rounded-2xl border ${
                  isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                } shadow-2xl overflow-hidden`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center justify-between px-2 py-2 sm:px-3 sm:py-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as Tab)}
                        className={`relative flex flex-col items-center justify-center px-1.5 py-2 sm:px-2 sm:py-2.5 rounded-xl transition-all duration-200 min-w-0 flex-1 ${
                          isActive
                            ? isDark
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-600 text-white'
                            : isDark
                              ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Icon size={16} className="sm:w-5 sm:h-5" />
                        <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium truncate w-full text-center leading-tight">
                          {item.label}
                        </span>
                        
                        {isActive && (
                          <motion.div
                            className="absolute -top-0.5 sm:-top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.nav>
            </div>
          </div>
        </div>
      </Authenticated>

      <Unauthenticated>
        {!showAuth ? (
          <LandingPage onGetStarted={() => setShowAuth(true)} />
        ) : (
          <AuthPage onBack={() => setShowAuth(false)} />
        )}
      </Unauthenticated>

      <Toaster theme={isDark ? "dark" : "light"} />
    </div>
  );
}