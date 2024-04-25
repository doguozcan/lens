import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="font-rubik">
      <Navbar />
      {children}
    </div>
  )
}
export default Layout
