import './Portfolio.css'

const Portfolio = ({ language, translations}) => {
  return (
    <span className='aboutWidth portfolioContainer slideIn'>
      <div className='topWrapper'>
        <div className='markTittleContainer'>
          <div className='markTittle'> {translations[language].portfolioTittle} </div>
          <h1> {translations[language].portfolioH1} </h1>
        </div>
        <div className='portfolioTop'>
          <ul>
            <li> {translations[language].portfolioAll} </li>
            <li> JavaScript </li>
            <li> React </li>
            <li> {translations[language].portfolioOthers} </li>
          </ul>
        </div>
      </div>
      <div className='flexWrapper'>
        <ul>
          <li>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
        </ul>

      </div>
    </span>
  )
}

export default Portfolio