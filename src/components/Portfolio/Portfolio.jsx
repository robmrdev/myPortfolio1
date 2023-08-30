import './Portfolio.css'
import { useEffect } from 'react';

const Portfolio = ({ language, translations }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
          <li className='portfolioLi'>
            <div className='newsImgContainer'>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
            </div>
          </li>
        </ul>

      </div>
    </span>
  )
}

export default Portfolio