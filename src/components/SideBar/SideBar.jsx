import "./SideBar.css"
import { NavLink, Link } from "react-router-dom"

const SideBar = ({isOpen}) => {
  return (
    <nav className={isOpen ? 'visible' : ''}>
        <Link to="/">
        <h2>ROBERT M</h2>
        </Link>
        <ul>
            <li><NavLink to="/"><i class="fa-solid fa-house"></i> Home </NavLink></li>
            <li><NavLink to="/aboutme"><i class="fa-solid fa-user"></i> About Me </NavLink></li>
            <li><NavLink to="/whatido"><i class="fa-solid fa-gear"></i> What I Do </NavLink></li>
            <li><NavLink to="/portfolio"><i class="fi fi-rr-briefcase"></i> Portfolio </NavLink></li>
            <li><NavLink to="/news"><i class="fa-regular fa-newspaper"></i> News </NavLink></li>
            <li><NavLink to='/contact'><i class="fa-regular fa-envelope"></i> Contact </NavLink></li>
        </ul>
        <p>
            © 2023 Robert Mendoza
        </p>
    </nav>
  )
}

export default SideBar