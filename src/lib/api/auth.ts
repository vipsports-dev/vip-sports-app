import { currentUser } from '@clerk/nextjs/server'
import { supabaseServer } from './supabase'

export async function getCurrentProfile() {
  const user = await currentUser()
  if (!user) return null

  const supabase = supabaseServer()
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  return profile
}

export async function getCurrentRole(): Promise<'guest' | 'basic' | 'vip' | 'admin'> {
  const profile = await getCurrentProfile()
  return profile?.role ?? 'guest'
}