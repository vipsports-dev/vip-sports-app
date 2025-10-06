'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function SyncUserToSupabase() {
  const { isLoaded, user } = useUser()

  useEffect(() => {
    if (!isLoaded || !user) return
    fetch('/api/sync-user', { method: 'POST' }).catch(console.error)
  }, [isLoaded, user])

  return null
}