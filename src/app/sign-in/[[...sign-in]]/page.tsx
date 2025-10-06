'use client'

import { SignIn, useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn } = useUser()

  if ( !isSignedIn ) {
    return (
      <main className="flex items-center justify-center">
        <SignIn />
      </main>
    )
  }
}