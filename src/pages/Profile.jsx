import handleSignOut from "../utils/handleSignOut"

const Profile = () => {
  return (
    <div>
      <button className="btn btn-warning" onClick={handleSignOut}>
        sign out
      </button>
    </div>
  )
}
export default Profile
