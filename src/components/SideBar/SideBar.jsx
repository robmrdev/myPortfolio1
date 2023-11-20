import "./SideBar.css"
import { NavLink, Link } from "react-router-dom"

const SideBar = ({isOpen, language, translations, toggleMenu}) => {
  
  
  return (
    <nav className={isOpen ? 'visible' : ''}>
        <Link to="/" onClick={toggleMenu}>
          <img src="/logoMedium.png" alt="" className="mediumLogoSide" />
        </Link>
        <ul>
            <li><NavLink to="/" onClick={toggleMenu}><i className="fa-solid fa-house"></i> {translations[language].sideHome} </NavLink></li>
            <li><NavLink to="/aboutme" onClick={toggleMenu}><i className="fa-solid fa-user"></i> {translations[language].aboutTittle} </NavLink></li>
            <li><NavLink to="/whatido" onClick={toggleMenu}><i className="fa-solid fa-gear"></i> {translations[language].servicesTittle} </NavLink></li>
            <li><NavLink to="/portfolio" onClick={toggleMenu}><i className="fi fi-rr-briefcase"></i> {translations[language].portfolioTittle} </NavLink></li>
            <li><NavLink to="/news" onClick={toggleMenu}><i className="fa-regular fa-newspaper"></i> {translations[language].newsTittle} </NavLink></li>
            <li><NavLink to='/contact' onClick={toggleMenu}><i className="fa-regular fa-envelope"></i> {translations[language].contactTittle} </NavLink></li>
        </ul>
        <p>
            © 2023 Robert Mendoza
        </p>
    </nav>
  )
}

export default SideBar