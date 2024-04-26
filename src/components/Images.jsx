import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"
import { useAuth } from "../hooks/useAuth"

const Images = () => {
  const { user } = useAuth()
  const [imageNames, setImagesNames] = useState([])

  const fetchImages = async () => {
    const { data, error } = await supabase.storage
      .from("images")
      .list(`${user.id}`)

    if (error) {
      console.log(error)
    }

    if (data) {
      setImagesNames(data.map((item) => item.name))
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const deleteImage = async (imageFolder, imageName) => {
    const { data, error } = await supabase.storage
      .from("images")
      .remove([`${imageFolder}/${imageName}`])

    if (data) {
      fetchImages()
      console.log(data)
    }

    if (error) {
      console.log(error)
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
      {imageNames.map((imageName) => (
        <div key={imageName} className="relative">
          <img
            className="h-96 w-full rounded-xl object-cover"
            src={`${
              import.meta.env.VITE_SUPABASE_URL
            }/storage/v1/object/public/images/${user.id}/${imageName}`}
          />
          <button
            className="btn btn-error absolute top-1 right-1 text-white"
            onClick={() => deleteImage(user.id, imageName)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
export default Images
