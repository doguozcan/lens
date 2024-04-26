import SignOutButton from "../components/SignOutButton"
import Images from "../components/Images"

const Profile = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
      <p className="text-sm text-center">
        in this context you have the opportunity to preview images that have
        been contributed by{" "}
        <span className="text-primary animate-pulse">yourself</span>
      </p>
      <Images />
      <p className="text-sm text-center">
        you can <span className="text-error animate-pulse">delete</span> your
        images whenever you want
      </p>
      <SignOutButton />
    </div>
  )
}
export default Profile
