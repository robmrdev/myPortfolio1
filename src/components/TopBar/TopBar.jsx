import './TopBar.css'
import { NavLink } from 'react-router-dom'

const TopBar = ({ toggleMenu, menuAbierto }) => {
  return (
    <span className='topBar' >
      <NavLink to='/'><img src="./whiteLogo.png" alt="" /></NavLink>
    <i className={menuAbierto ? 'fa-solid fa-x' : 'fa-solid fa-bars'} onClick={toggleMenu}></i>
    </span>

  )
}

export default TopBar