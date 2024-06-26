import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 p-5 bg-primary">
      <Link className="text-white" to="/">
        home
      </Link>
      <Link className="text-white" to="/profile">
        profile
      </Link>
    </div>
  )
}
export default Navbar
