import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  todos: defineTable({
    userId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    completed: v.boolean(),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high")),
    dueDate: v.optional(v.number()),
    points: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_completed", ["userId", "completed"]),

  scheduleItems: defineTable({
    userId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    startTime: v.number(),
    endTime: v.number(),
    date: v.string(), // YYYY-MM-DD format
    completed: v.boolean(),
    points: v.number(),
  })
    .index("by_user_date", ["userId", "date"])
    .index("by_user", ["userId"]),

  journalEntries: defineTable({
    userId: v.id("users"),
    title: v.string(),
    content: v.string(),
    date: v.string(), // YYYY-MM-DD format
    mood: v.union(
      v.literal("excellent"),
      v.literal("good"),
      v.literal("neutral"),
      v.literal("bad"),
      v.literal("terrible")
    ),
    points: v.number(),
  })
    .index("by_user_date", ["userId", "date"])
    .index("by_user", ["userId"]),

  userStats: defineTable({
    userId: v.id("users"),
    totalPoints: v.number(),
    level: v.number(),
    streak: v.number(),
    lastActiveDate: v.string(),
    todosCompleted: v.number(),
    scheduleItemsCompleted: v.number(),
    journalEntriesCreated: v.number(),
  })
    .index("by_user", ["userId"]),

  userProfiles: defineTable({
    userId: v.id("users"),
    warriorName: v.string(),
    displayName: v.optional(v.string()),
    bio: v.optional(v.string()),
    avatarStorageId: v.optional(v.id("_storage")),
    joinedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_warrior_name", ["warriorName"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
