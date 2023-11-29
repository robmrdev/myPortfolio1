import './MainPage.css'
import Typer from '../Typer/Typer'
import Counter from '../../assets/utils';

const MainPage = ({ language, translations, closeSideBar}) => {
  Counter('main')
  const wordsToType = translations[language].wordsToType;
  return (
    <div className='mainPageContainer slideIn' onClick={closeSideBar}>
        <div className='mainleft'>
          <div></div>
        </div>
        <div className='mainRight'>
          <h1>ROBERT MENDOZA</h1>
          <Typer wordsToType= {wordsToType} />
          <p>{translations[language].mainP}</p>
          <div>
            <a href="https://github.com/robmrdev" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ramr-dev/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>            
          </div>
      </div>
    </div>

  )
}

export default MainPage