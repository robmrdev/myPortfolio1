import "./WhatIDo.css"

const WhatIDo = ({ language, translations}) => {
  return (
    <div className="slideIn">
      <span className="aboutWidth whatIDoContainer">
        <div className='markTittleContainer'>
          <div className='markTittle'> {translations[language].servicesTittle} </div>
          <h1> {translations[language].servicesH1} </h1>
        </div>
        <div className="servicesContainer">
          <ul className="servicesUl">
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">01</span>
                  <h3>{translations[language].servicesH31}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP1}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">02</span>
                  <h3>{translations[language].servicesH32}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP2}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">03</span>
                  <h3>{translations[language].servicesH33}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP3}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">04</span>
                  <h3>{translations[language].servicesH34}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP4}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">05</span>
                  <h3>{translations[language].servicesH35}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP5}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="servicesTittle">
                  <span className="number">06</span>
                  <h3>{translations[language].servicesH36}</h3>
                </div>
                <div className="servicesDesc">
                  <p>{translations[language].servicesP6}</p>
                  <span className="readMore">{translations[language].servicesReadMore}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </span>
    </div>
  )
}

export default WhatIDo