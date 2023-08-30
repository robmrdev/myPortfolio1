import './News.css'
import { useEffect } from 'react';
import profile from '../../img/profile.jpeg'

const News = ({ language, translations }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const img1 = { profile }
  return (
    <section className='aboutWidth portfolioContainer slideIn'>
      <div className='markTittleContainer'>
        <div className='markTittle'> {translations[language].newsTittle} </div>
        <h1> {translations[language].newsH1} </h1>
      </div>
      <div className='flexWrapper'>
        <ul>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <div className='newsImgContainer'>
                <div className='newsImg'></div>
              </div>
              <div className='newsDescription servicesDesc'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <div>
                  <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default News