import { NavLink } from "react-router-dom"
import "../style/nav.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">PALAK</div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}
