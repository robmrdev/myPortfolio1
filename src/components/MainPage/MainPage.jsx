import './MainPage.css'
import Typer from '../Typer/Typer'

const MainPage = ({ language, translations}) => {

  const wordsToType = translations[language].wordsToType;
  return (
    <div className='mainPageContainer slideIn'>
        <div className='mainleft'>
          <div></div>
        </div>
        <div className='mainRight'>
          <h1>ROBERT MENDOZA</h1>
          <Typer wordsToType= {wordsToType} />
          <p>{translations[language].mainP}</p>
          <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
      </div>
    </div>

  )
}

export default MainPage