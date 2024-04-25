import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"
import { useAuth } from "../hooks/useAuth"

const Images = () => {
  const { user } = useAuth()
  const [imageNames, setImagesNames] = useState([])

  useEffect(() => {
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

    fetchImages()
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
      {imageNames.map((imageName) => (
        <img
          className="h-96 w-full rounded-xl object-cover"
          src={`${
            import.meta.env.VITE_SUPABASE_URL
          }/storage/v1/object/public/images/${user.id}/${imageName}`}
        />
      ))}
    </div>
  )
}
export default Images
