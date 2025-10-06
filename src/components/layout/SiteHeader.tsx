'use client'

import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'

export default function SiteHeader() {
  return (
    <header className="flex justify-between items-center p-4 h-16 border-b border-gray-200 bg-white">
      {/* Left: Logo */}
      <Link href="/" className="text-lg font-semibold text-purple-600">
        VIP Sports
      </Link>

      {/* Center: Navigation (placeholder links for now) */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/nfl/lobby">Lobby</Link>
        {/* More nav items will appear here later depending on role */}
      </nav>

      {/* Right: Auth buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="rounded-full border border-purple-600 px-4 py-1.5 text-purple-600 hover:bg-purple-50 text-sm sm:text-base">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}