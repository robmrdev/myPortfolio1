import './News.css'

const News = ({ language, translations}) => {
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
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
          <li className='newsLi'>
            <div>
              <img src="https://dummyimage.com/500x500/000/fff" alt="" />
              <div className='newsDescription'>
                <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <span className='readMore'>{translations[language].servicesReadMore}</span>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default News