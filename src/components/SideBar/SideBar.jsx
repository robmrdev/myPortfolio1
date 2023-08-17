import "./SideBar.css"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/aboutme"> About Me </NavLink></li>
            <li><NavLink to="/whatido"> What I Do </NavLink></li>
            <li><NavLink to="/portfolio"> Portfolio </NavLink></li>
            <li><NavLink to="/news"> News </NavLink></li>
            <li><NavLink to='/contact'> Contact </NavLink></li>
        </ul>
    </nav>
  )
}

export default SideBar