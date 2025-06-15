import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

const ACHIEVEMENTS = [
  {
    id: "first_task",
    title: "Getting Started",
    description: "Complete your first task",
    icon: "🎯",
    target: 1,
    type: "todos_completed",
  },
  {
    id: "task_master",
    title: "Task Master",
    description: "Complete 50 tasks",
    icon: "🏆",
    target: 50,
    type: "todos_completed",
  },
  {
    id: "journal_writer",
    title: "Journal Writer",
    description: "Write 10 journal entries",
    icon: "📝",
    target: 10,
    type: "journal_entries",
  },
  {
    id: "time_keeper",
    title: "Time Keeper",
    description: "Complete 25 schedule items",
    icon: "⏰",
    target: 25,
    type: "schedule_completed",
  },
  {
    id: "point_collector",
    title: "Point Collector",
    description: "Earn 1000 total points",
    icon: "⭐",
    target: 1000,
    type: "total_points",
  },
  {
    id: "level_up",
    title: "Level Up",
    description: "Reach level 10",
    icon: "🚀",
    target: 10,
    type: "level",
  },
  {
    id: "streak_keeper",
    title: "Streak Keeper",
    description: "Maintain a 7-day streak",
    icon: "🔥",
    target: 7,
    type: "streak",
  },
  {
    id: "productivity_guru",
    title: "Productivity Guru",
    description: "Complete 100 tasks",
    icon: "🧘",
    target: 100,
    type: "todos_completed",
  },
  {
    id: "reflection_master",
    title: "Reflection Master",
    description: "Write 50 journal entries",
    icon: "🌟",
    target: 50,
    type: "journal_entries",
  },
];

export const getUserAchievements = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const stats = await ctx.db
      .query("userStats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (!stats) {
      return ACHIEVEMENTS.map(achievement => ({
        ...achievement,
        unlocked: false,
        progress: 0,
        unlockedAt: null,
      }));
    }

    return ACHIEVEMENTS.map(achievement => {
      let progress = 0;
      
      switch (achievement.type) {
        case "todos_completed":
          progress = stats.todosCompleted;
          break;
        case "journal_entries":
          progress = stats.journalEntriesCreated;
          break;
        case "schedule_completed":
          progress = stats.scheduleItemsCompleted;
          break;
        case "total_points":
          progress = stats.totalPoints;
          break;
        case "level":
          progress = stats.level;
          break;
        case "streak":
          progress = stats.streak;
          break;
      }

      const unlocked = progress >= achievement.target;

      return {
        ...achievement,
        unlocked,
        progress: Math.min(progress, achievement.target),
        unlockedAt: unlocked ? stats._creationTime : null,
      };
    });
  },
});
