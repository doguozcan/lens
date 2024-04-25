import { createContext, useState, useEffect, useContext } from "react"
import { supabase } from "../api/supabaseClient"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user) // null check
      setLoading(false)
    })

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user)
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ session, user }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
