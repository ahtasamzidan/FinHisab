'use client'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>FinHisab</h1>
      <button onClick={login}>
        Continue with Google
      </button>
    </div>
  )
}
