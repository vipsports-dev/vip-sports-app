import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side: safe for use inside useEffect etc.
export const supabaseBrowser = () =>
  createClient(supabaseUrl, supabaseAnonKey)

// Server-side: using service key when needed (via env)
export const supabaseServer = () =>
  createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )