import './MainPage.css'
import Typer from '../Typer/Typer'

const MainPage = () => {
  return (
    <div className='mainPageContainer slideIn'>
        <div className='mainleft'>
          <div></div>
        </div>
        <div className='mainRight'>
          <h1>ROBERT MENDOZA</h1>
          <Typer />
          <p>Passionate developer based in Buenos Aires, dedicated to daily learning and constantly seeking fresh challenges.</p>
          <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
      </div>
    </div>

  )
}

export default MainPage