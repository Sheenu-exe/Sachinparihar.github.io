import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getAnalytics = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    // Get this week's data
    const thisWeekTodos = await ctx.db
      .query("todos")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.gte(q.field("_creationTime"), weekAgo.getTime()))
      .collect();

    const thisWeekSchedule = await ctx.db
      .query("scheduleItems")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.gte(q.field("_creationTime"), weekAgo.getTime()))
      .collect();

    const thisWeekJournal = await ctx.db
      .query("journalEntries")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.gte(q.field("_creationTime"), weekAgo.getTime()))
      .collect();

    // Get last week's data
    const lastWeekTodos = await ctx.db
      .query("todos")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => 
        q.and(
          q.gte(q.field("_creationTime"), twoWeeksAgo.getTime()),
          q.lt(q.field("_creationTime"), weekAgo.getTime())
        )
      )
      .collect();

    const thisWeekPoints = thisWeekTodos.reduce((sum, t) => sum + (t.completed ? t.points : 0), 0) +
                          thisWeekSchedule.reduce((sum, s) => sum + (s.completed ? s.points : 0), 0) +
                          thisWeekJournal.reduce((sum, j) => sum + j.points, 0);

    const lastWeekPoints = lastWeekTodos.reduce((sum, t) => sum + (t.completed ? t.points : 0), 0);

    const weeklyChange = lastWeekPoints > 0 
      ? Math.round(((thisWeekPoints - lastWeekPoints) / lastWeekPoints) * 100)
      : 0;

    const avgDailyPoints = Math.round(thisWeekPoints / 7);

    // Find best day
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dailyPoints = Array(7).fill(0);
    
    thisWeekTodos.forEach(todo => {
      if (todo.completed) {
        const day = new Date(todo._creationTime).getDay();
        dailyPoints[day] += todo.points;
      }
    });

    const bestDayIndex = dailyPoints.indexOf(Math.max(...dailyPoints));
    const bestDay = dayNames[bestDayIndex];

    return {
      thisWeekPoints,
      weeklyChange,
      avgDailyPoints,
      bestDay,
      tasksThisWeek: thisWeekTodos.filter(t => t.completed).length,
      scheduleItemsThisWeek: thisWeekSchedule.filter(s => s.completed).length,
      journalEntriesThisWeek: thisWeekJournal.length,
    };
  },
});

export const getWeeklyData = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weeklyData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      const dayEnd = dayStart + 24 * 60 * 60 * 1000;

      const dayTodos = await ctx.db
        .query("todos")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .filter((q) => 
          q.and(
            q.gte(q.field("_creationTime"), dayStart),
            q.lt(q.field("_creationTime"), dayEnd),
            q.eq(q.field("completed"), true)
          )
        )
        .collect();

      const daySchedule = await ctx.db
        .query("scheduleItems")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .filter((q) => 
          q.and(
            q.gte(q.field("_creationTime"), dayStart),
            q.lt(q.field("_creationTime"), dayEnd),
            q.eq(q.field("completed"), true)
          )
        )
        .collect();

      const dayJournal = await ctx.db
        .query("journalEntries")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .filter((q) => 
          q.and(
            q.gte(q.field("_creationTime"), dayStart),
            q.lt(q.field("_creationTime"), dayEnd)
          )
        )
        .collect();

      const points = dayTodos.reduce((sum, t) => sum + t.points, 0) +
                    daySchedule.reduce((sum, s) => sum + s.points, 0) +
                    dayJournal.reduce((sum, j) => sum + j.points, 0);

      weeklyData.push({
        day: dayNames[date.getDay()],
        points,
      });
    }

    return weeklyData;
  },
});
