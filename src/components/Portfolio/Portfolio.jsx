import './Portfolio.css'
import { useEffect, useState } from 'react';
import PortfolioModal from '../PortfolioModal/PortfolioModal';

import portfolioData from "../../data/data.json"
import Counter from '../../assets/utils';


const Portfolio = ({ language, translations, closeSideBar }) => {
  Counter('portfolio')
  const [selectedCategory, setSelectedCategory] = useState('All');

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


  const filteredPortfolio = portfolioData.portfolio.filter(
    (item) =>
      selectedCategory === 'All' || item.tech === selectedCategory
  );

  const filteredModal = translations[language].portfolio.filter(
    (item) =>
      selectedCategory === 'All' || item.tech === selectedCategory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PortfolioModal language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} portfolioSelector={currentPortfolio} filteredPortfolio= {filteredPortfolio} filteredModal={filteredModal}/>
      <span className='aboutWidth portfolioContainer slideIn' onClick={closeSideBar}>
        <div className='topWrapper'>
          <div className='markTittleContainer'>
            <div className='markTittle'> {translations[language].portfolioTittle} </div>
            <h1> {translations[language].portfolioH1} </h1>
          </div>
          <div className='portfolioTop'>
            <ul>
              <li onClick={() => setSelectedCategory('All')}> {translations[language].portfolioAll} </li>
              <li onClick={() => setSelectedCategory('1')}> JavaScript </li>
              <li onClick={() => setSelectedCategory('2')}> React </li>
              <li onClick={() => setSelectedCategory('3')}> {translations[language].portfolioOthers} </li>
            </ul>
          </div>
        </div>
        
        <div className='flexWrapper'>
          <ul>
            {filteredPortfolio.map((item, index) => (
              <li className="portfolioLi" key={index}>
                <div className="newsImgContainer">
                  <img
                    src={item.img1}
                    alt=""
                    onClick={() => openModal(index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </span>
    </>
  )
}

export default Portfolio