import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getUserProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    const stats = await ctx.db
      .query("userStats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    let avatarUrl = null;
    if (profile?.avatarStorageId) {
      avatarUrl = await ctx.storage.getUrl(profile.avatarStorageId);
    }

    return {
      ...profile,
      avatarUrl,
      totalPoints: stats?.totalPoints || 0,
      level: stats?.level || 1,
      streak: stats?.streak || 0,
      todosCompleted: stats?.todosCompleted || 0,
    };
  },
});

export const updateProfile = mutation({
  args: {
    displayName: v.string(),
    bio: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const existingProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (existingProfile) {
      await ctx.db.patch(existingProfile._id, {
        displayName: args.displayName,
        bio: args.bio,
      });
    } else {
      await ctx.db.insert("userProfiles", {
        userId,
        warriorName: `warrior_${Date.now()}`,
        displayName: args.displayName,
        bio: args.bio,
        joinedAt: Date.now(),
      });
    }
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const updateAvatar = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const existingProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (existingProfile) {
      await ctx.db.patch(existingProfile._id, {
        avatarStorageId: args.storageId,
      });
    } else {
      await ctx.db.insert("userProfiles", {
        userId,
        warriorName: `warrior_${Date.now()}`,
        displayName: "Anonymous User",
        avatarStorageId: args.storageId,
        joinedAt: Date.now(),
      });
    }
  },
});
