import { supabase } from './supabaseClient'

function App() {
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://finhisab.vercel.app'
      }
    })
    if (error) alert(error.message)
  }

  return (
    <button onClick={loginWithGoogle}>
      Login with Google
    </button>
  )
}

export default App
