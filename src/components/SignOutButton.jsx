import handleSignOut from "../utils/handleSignOut"

const SignOutButton = () => {
  return (
    <div className="flex justify-end">
      <button
        className="btn btn-warning text-white btn-sm"
        onClick={handleSignOut}
      >
        sign out
      </button>
    </div>
  )
}
export default SignOutButton
