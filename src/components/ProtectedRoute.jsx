import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Layout from "./Layout"

const ProtectedRoute = () => {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default ProtectedRoute
