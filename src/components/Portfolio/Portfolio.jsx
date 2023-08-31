import './Portfolio.css'
import { useEffect, useState } from 'react';
import PortfolioModal from '../PortfolioModal/PortfolioModal';

import portfolioData from "../../data/data.json"

const Portfolio = ({ language, translations }) => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState(1);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = (currentPortfolio) => {
    console.log(currentPortfolio)
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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <PortfolioModal language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} portfolioSelector={currentPortfolio}/>
      <span className='aboutWidth portfolioContainer slideIn'>
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
            {/* <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src=IMG1 alt="" onClick={() => openModal(INDEX)}/>
              </div>
            </li>
            <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src="https://dummyimage.com/500x500/000/fff" alt="" onClick={() => openModal(2)}/>
              </div>
            </li>
            <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src="https://dummyimage.com/500x500/000/fff" alt="" onClick={() => openModal(3)}/>
              </div>
            </li>
            <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src="https://dummyimage.com/500x500/000/fff" alt="" onClick={() => openModal(4)}/>
              </div>
            </li>
            <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src="https://dummyimage.com/500x500/000/fff" alt="" onClick={() => openModal(5)}/>
              </div>
            </li>
            <li className='portfolioLi'>
              <div className='newsImgContainer'>
                <img src="https://dummyimage.com/500x500/000/fff" alt="" onClick={() => openModal(6)}/>
              </div>
            </li> */}
          </ul>
        </div>
      </span>
    </>
  )
}

export default Portfolio