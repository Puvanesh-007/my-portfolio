import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar