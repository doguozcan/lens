import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import handleUploadImages from "../utils/handleUploadImages"

const ImageUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const { user } = useAuth()

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files])
  }

  const handleSubmitImages = async () => {
    await handleUploadImages(user, selectedFiles, setUploading)
    setSelectedFiles([])
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-sm gap-2">
        <input
          type="file"
          multiple
          className="file-input file-input-primary file-input-sm"
          onChange={handleFileChange}
        />
        <button
          className="btn btn-success text-white btn-sm"
          onClick={handleSubmitImages}
          disabled={uploading}
        >
          upload image
        </button>
      </div>
    </div>
  )
}
export default ImageUploadForm
