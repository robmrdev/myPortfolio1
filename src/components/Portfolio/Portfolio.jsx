import './Portfolio.css'
import { useEffect, useState } from 'react';
import PortfolioModal from '../PortfolioModal/PortfolioModal';

const Portfolio = ({ language, translations }) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState(1);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = (currentPortfolio) => {
    setCurrentPortfolio(currentPortfolio);
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
    <PortfolioModal   language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} portfolioSelector={currentPortfolio}/>
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
                <img src="https://dummyimage.com/500x500/000/fff" alt=""  onClick={() => openModal(1)}/>
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
    </>
  )
}

export default Portfolio