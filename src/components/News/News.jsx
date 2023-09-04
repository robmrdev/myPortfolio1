import './News.css'
import { useEffect, useState } from 'react';
import NewsModal from '../NewsModal/NewsModal';

const News = ({ language, translations, closeSideBar }) => {

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
      <NewsModal language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} newsSelector={currentNews} />
      <section className='aboutWidth portfolioContainer slideIn' onClick={closeSideBar}>
        <div className='markTittleContainer'>
          <div className='markTittle'> {translations[language].newsTittle} </div>
          <h1> {translations[language].newsH1} </h1>
        </div>
        <div className='flexWrapper'>
          <ul>

            {translations[language].news.map((item, index) => (
              <li className='newsLi'>
                <div>
                  <div className='newsImgContainer'>
                    <div className='newsImg' style={{ backgroundImage: `url(${item.img})` }}></div>
                  </div>
                  <div className='newsDescription servicesDesc' onClick={() => openModal(index)}>
                    <p>{translations[language].newsBy} ROBERT MENDOZA / {item.newsDate}</p>
                    <h4>{item.newsP}</h4>
                    <div>
                      <span className='readMore'><p>{translations[language].servicesReadMore}</p><div></div></span>
                    </div>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </section>
    </>
  )
}

export default News