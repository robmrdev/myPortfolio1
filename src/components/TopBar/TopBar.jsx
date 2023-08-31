import './TopBar.css'

const TopBar = ({ toggleMenu, menuAbierto }) => {
  return (
    <span className='topBar' >
        <h2>ROBERT M</h2>
    <i className={menuAbierto ? 'fa-solid fa-x' : 'fa-solid fa-bars'} onClick={toggleMenu}></i>
    </span>

  )
}

export default TopBar