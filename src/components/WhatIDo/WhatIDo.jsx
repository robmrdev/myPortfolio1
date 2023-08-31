import "./WhatIDo.css"
import { useEffect, useState } from "react";
import ServiceModal from "../ServiceModal/ServiceModal";

const WhatIDo = ({ language, translations }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(1);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = (currentService) => {
    setCurrentService(currentService);
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
    <ServiceModal  language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} serviceSelector={currentService}/>
      <div className="slideIn">
        <span className="aboutWidth whatIDoContainer">
          <div className='markTittleContainer'>
            <div className='markTittle'> {translations[language].servicesTittle} </div>
            <h1> {translations[language].servicesH1} </h1>
          </div>
          <div className="servicesContainer">
            <ul className="servicesUl">
              <li>
                <div onClick={() => openModal(1)}>
                  <div className="servicesTittle">
                    <span className="number">01</span>
                    <h3>{translations[language].servicesH31}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP1}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => openModal(2)}>
                  <div className="servicesTittle">
                    <span className="number">02</span>
                    <h3>{translations[language].servicesH32}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP2}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => openModal(3)}>
                  <div className="servicesTittle">
                    <span className="number">03</span>
                    <h3>{translations[language].servicesH33}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP3}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => openModal(4)}>
                  <div className="servicesTittle">
                    <span className="number">04</span>
                    <h3>{translations[language].servicesH34}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP4}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => openModal(5)}>
                  <div className="servicesTittle">
                    <span className="number">05</span>
                    <h3>{translations[language].servicesH35}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP5}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => openModal(6)}>
                  <div className="servicesTittle">
                    <span className="number">06</span>
                    <h3>{translations[language].servicesH36}</h3>
                  </div>
                  <div className="servicesDesc">
                    <p>{translations[language].servicesP6}</p>
                    <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </>
  )
}

export default WhatIDo