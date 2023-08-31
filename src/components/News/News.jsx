import './News.css'
import { useEffect, useState } from 'react';
import NewsModal from '../NewsModal/NewsModal';

const News = ({ language, translations }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(1);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = (currentNews) => {
    setCurrentNews(currentNews);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <NewsModal  language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} serviceSelector={currentNews}/>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(1)}>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(2)}>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(3)}>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(4)}>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(5)}>
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
              <div className='newsDescription servicesDesc' onClick={() => openModal(6)}>
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
    </>
  )
}

export default News