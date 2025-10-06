// lib/api/types.ts
export interface ClerkServerAuth {
  userId: string | null
  sessionId: string | null
  getToken: (opts?: unknown) => Promise<string | null>
}