import { useState } from "react"
import { supabase } from "../api/supabaseClient"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"

const Login = () => {
  const { session } = useAuth()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSendMagicLink = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert("check your mailbox")
      setEmail("")
    }
    setLoading(false)
  }

  return session ? (
    <Navigate to="/" />
  ) : (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <p className="text-primary text-5xl animate-pulse">lens</p>
        <p>welcome to lens</p>
        <p>enter your email to get a magic link</p>
        <input
          type="email"
          className="input input-primary input-bordered input-sm"
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn btn-primary btn-outline btn-sm"
          onClick={handleSendMagicLink}
          disabled={loading}
        >
          send
        </button>
      </div>
    </div>
  )
}
export default Login
