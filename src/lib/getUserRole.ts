import { currentUser } from "@clerk/nextjs/server";

export type UserRole = "guest" | "basic" | "vip" | "admin";

/**
 * Mock role resolver — replace with Supabase lookup later.
 */
export async function getUserRole(): Promise<UserRole> {
  const user = await currentUser();
  if (!user) return "guest";

  // TEMP: you can use user email for quick testing
  if (user.emailAddresses[0]?.emailAddress.includes("admin"))
    return "admin";
  if (user.emailAddresses[0]?.emailAddress.includes("vip"))
    return "vip";
  return "basic";
}