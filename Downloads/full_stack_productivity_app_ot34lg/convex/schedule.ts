import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const listByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("scheduleItems")
      .withIndex("by_user_date", (q) => q.eq("userId", userId).eq("date", args.date))
      .order("asc")
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    startTime: v.number(),
    endTime: v.number(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const duration = (args.endTime - args.startTime) / (1000 * 60 * 60); // hours
    const points = Math.round(duration * 5); // 5 points per hour

    return await ctx.db.insert("scheduleItems", {
      userId,
      title: args.title,
      description: args.description,
      startTime: args.startTime,
      endTime: args.endTime,
      date: args.date,
      completed: false,
      points,
    });
  },
});

export const toggle = mutation({
  args: { id: v.id("scheduleItems") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const item = await ctx.db.get(args.id);
    if (!item || item.userId !== userId) {
      throw new Error("Schedule item not found");
    }

    const newCompleted = !item.completed;
    await ctx.db.patch(args.id, { completed: newCompleted });

    // Update user stats if completing
    if (newCompleted) {
      const stats = await ctx.db
        .query("userStats")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .unique();

      if (stats) {
        await ctx.db.patch(stats._id, {
          totalPoints: stats.totalPoints + item.points,
          scheduleItemsCompleted: stats.scheduleItemsCompleted + 1,
          level: Math.floor((stats.totalPoints + item.points) / 100) + 1,
        });
      } else {
        await ctx.db.insert("userStats", {
          userId,
          totalPoints: item.points,
          level: 1,
          streak: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          todosCompleted: 0,
          scheduleItemsCompleted: 1,
          journalEntriesCreated: 0,
        });
      }
    }
  },
});

export const remove = mutation({
  args: { id: v.id("scheduleItems") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const item = await ctx.db.get(args.id);
    if (!item || item.userId !== userId) {
      throw new Error("Schedule item not found");
    }

    await ctx.db.delete(args.id);
  },
});
