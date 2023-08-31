import "./SideBar.css"
import { NavLink, Link } from "react-router-dom"

const SideBar = ({isOpen, language, translations}) => {
  
  return (
    <nav className={isOpen ? 'visible' : ''}>
        <Link to="/">
        <h2>ROBERT M</h2>
        </Link>
        <ul>
            <li><NavLink to="/"><i className="fa-solid fa-house"></i> {translations[language].sideHome} </NavLink></li>
            <li><NavLink to="/aboutme"><i className="fa-solid fa-user"></i> {translations[language].aboutTittle} </NavLink></li>
            <li><NavLink to="/whatido"><i className="fa-solid fa-gear"></i> {translations[language].servicesTittle} </NavLink></li>
            <li><NavLink to="/portfolio"><i className="fi fi-rr-briefcase"></i> {translations[language].portfolioTittle} </NavLink></li>
            <li><NavLink to="/news"><i className="fa-regular fa-newspaper"></i> {translations[language].newsTittle} </NavLink></li>
            <li><NavLink to='/contact'><i className="fa-regular fa-envelope"></i> {translations[language].contactTittle} </NavLink></li>
        </ul>
        <p>
            © 2023 Robert Mendoza
        </p>
    </nav>
  )
}

export default SideBar