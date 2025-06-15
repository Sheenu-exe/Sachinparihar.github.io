import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const listByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("journalEntries")
      .withIndex("by_user_date", (q) => q.eq("userId", userId).eq("date", args.date))
      .order("desc")
      .collect();
  },
});

export const getRecent = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("journalEntries")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .take(10);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    date: v.string(),
    mood: v.union(
      v.literal("excellent"),
      v.literal("good"),
      v.literal("neutral"),
      v.literal("bad"),
      v.literal("terrible")
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const moodPoints = {
      excellent: 20,
      good: 15,
      neutral: 10,
      bad: 5,
      terrible: 5,
    };

    const points = moodPoints[args.mood] + Math.min(args.content.length / 50, 10);

    const entryId = await ctx.db.insert("journalEntries", {
      userId,
      title: args.title,
      content: args.content,
      date: args.date,
      mood: args.mood,
      points: Math.round(points),
    });

    // Update user stats
    const stats = await ctx.db
      .query("userStats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (stats) {
      await ctx.db.patch(stats._id, {
        totalPoints: stats.totalPoints + Math.round(points),
        journalEntriesCreated: stats.journalEntriesCreated + 1,
        level: Math.floor((stats.totalPoints + Math.round(points)) / 100) + 1,
      });
    } else {
      await ctx.db.insert("userStats", {
        userId,
        totalPoints: Math.round(points),
        level: 1,
        streak: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        todosCompleted: 0,
        scheduleItemsCompleted: 0,
        journalEntriesCreated: 1,
      });
    }

    return entryId;
  },
});

export const remove = mutation({
  args: { id: v.id("journalEntries") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const entry = await ctx.db.get(args.id);
    if (!entry || entry.userId !== userId) {
      throw new Error("Journal entry not found");
    }

    await ctx.db.delete(args.id);
  },
});
