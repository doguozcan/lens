import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"

const Home = () => {
  const [folderNames, setFolderNames] = useState([])
  const [imagePaths, setImagePaths] = useState([])

  const fetchFolderNames = async () => {
    const { data, error } = await supabase.storage.from("images").list()

    if (error) {
      console.log(error)
    }
    if (data) {
      const folders = data
        .filter((folder) => folder.name !== ".emptyFolderPlaceholder")
        .map((item) => item.name)
      setFolderNames(folders)
    }
  }

  useEffect(() => {
    fetchFolderNames()
  }, [])

  const fetchImagesFromAFolder = async (folderName) => {
    const { data, error } = await supabase.storage
      .from("images")
      .list(folderName)

    if (error) {
      console.log(error)
    }

    if (data) {
      setImagePaths(data.map((item) => folderName + "/" + item.name))
    }
  }

  const fetchAllImages = async () => {
    for (let i = 0; i < folderNames.length; i++) {
      await fetchImagesFromAFolder(folderNames[i])
    }
  }

  useEffect(() => {
    fetchAllImages()
  }, [folderNames])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
      {imagePaths.map((imagePath) => (
        <div key={imagePath} className="relative">
          <img
            className="h-96 w-full rounded-xl object-cover"
            src={`${
              import.meta.env.VITE_SUPABASE_URL
            }/storage/v1/object/public/images/${imagePath}`}
          />
        </div>
      ))}
    </div>
  )
}
export default Home
