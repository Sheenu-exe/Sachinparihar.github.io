import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getUserStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const stats = await ctx.db
      .query("userStats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (!stats) {
      return {
        totalPoints: 0,
        level: 1,
        streak: 0,
        todosCompleted: 0,
        scheduleItemsCompleted: 0,
        journalEntriesCreated: 0,
      };
    }

    return stats;
  },
});
