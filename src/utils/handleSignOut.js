import { supabase } from "../api/supabaseClient"

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
  }
}
export default handleSignOut
