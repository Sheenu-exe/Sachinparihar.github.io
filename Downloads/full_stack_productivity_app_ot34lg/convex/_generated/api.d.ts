/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as achievements from "../achievements.js";
import type * as analytics from "../analytics.js";
import type * as auth from "../auth.js";
import type * as http from "../http.js";
import type * as journal from "../journal.js";
import type * as profiles from "../profiles.js";
import type * as router from "../router.js";
import type * as schedule from "../schedule.js";
import type * as stats from "../stats.js";
import type * as todos from "../todos.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  achievements: typeof achievements;
  analytics: typeof analytics;
  auth: typeof auth;
  http: typeof http;
  journal: typeof journal;
  profiles: typeof profiles;
  router: typeof router;
  schedule: typeof schedule;
  stats: typeof stats;
  todos: typeof todos;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
