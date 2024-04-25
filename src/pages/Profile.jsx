import ImageUploadForm from "../components/ImageUploadForm"
import SignOutButton from "../components/SignOutButton"
import Images from "../components/Images"

const Profile = () => {
  return (
    <div className="p-5">
      <ImageUploadForm />
      <Images />
      <SignOutButton />
    </div>
  )
}
export default Profile
