import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("todos")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),
    dueDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const points = args.priority === "high" ? 15 : args.priority === "medium" ? 10 : 5;

    return await ctx.db.insert("todos", {
      userId,
      title: args.title,
      description: args.description,
      completed: false,
      priority: args.priority,
      dueDate: args.dueDate,
      points,
    });
  },
});

export const toggle = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const todo = await ctx.db.get(args.id);
    if (!todo || todo.userId !== userId) {
      throw new Error("Todo not found");
    }

    const newCompleted = !todo.completed;
    await ctx.db.patch(args.id, { completed: newCompleted });

    // Update user stats if completing
    if (newCompleted) {
      const stats = await ctx.db
        .query("userStats")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .unique();

      if (stats) {
        await ctx.db.patch(stats._id, {
          totalPoints: stats.totalPoints + todo.points,
          todosCompleted: stats.todosCompleted + 1,
          level: Math.floor((stats.totalPoints + todo.points) / 100) + 1,
        });
      } else {
        await ctx.db.insert("userStats", {
          userId,
          totalPoints: todo.points,
          level: 1,
          streak: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          todosCompleted: 1,
          scheduleItemsCompleted: 0,
          journalEntriesCreated: 0,
        });
      }
    } else {
      // Remove points if uncompleting
      const stats = await ctx.db
        .query("userStats")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .unique();

      if (stats) {
        await ctx.db.patch(stats._id, {
          totalPoints: Math.max(0, stats.totalPoints - todo.points),
          todosCompleted: Math.max(0, stats.todosCompleted - 1),
          level: Math.floor(Math.max(0, stats.totalPoints - todo.points) / 100) + 1,
        });
      }
    }
  },
});

export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const todo = await ctx.db.get(args.id);
    if (!todo || todo.userId !== userId) {
      throw new Error("Todo not found");
    }

    await ctx.db.delete(args.id);
  },
});
