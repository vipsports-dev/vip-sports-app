import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/api/supabase"

export async function POST() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const user = await currentUser()
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  const supabase = supabaseServer()

  const email = user.emailAddresses?.[0]?.emailAddress ?? ""
  const first = user.firstName ?? ""
  const last = user.lastName ?? ""
  const displayName = [first, last].filter(Boolean).join(" ") || email

  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        user_id: user.id,
        email,
        display_name: displayName,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    )
    .select()
    .single()

  if (error) {
    console.error("Sync user error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ profile: data })
}