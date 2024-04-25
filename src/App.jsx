import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
export default App
