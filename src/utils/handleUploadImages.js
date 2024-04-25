import { supabase } from "../api/supabaseClient"

const handleUploadImages = async (user, files, setUploading) => {
  setUploading(true)
  for (let i = 0; i < files.length; i++) {
    let file = files[i]
    const imageId = crypto.randomUUID()
    const imagePath = `${user.id}/${imageId}`
    await supabase.storage.from("images").upload(imagePath, file)
  }
  setUploading(false)
}
export default handleUploadImages
