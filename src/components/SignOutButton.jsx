import handleSignOut from "../utils/handleSignOut"

const SignOutButton = () => {
  return (
    <button className="btn btn-warning btn-sm" onClick={handleSignOut}>
      sign out
    </button>
  )
}
export default SignOutButton
