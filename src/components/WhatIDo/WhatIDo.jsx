import "./WhatIDo.css"
import { useEffect, useState } from "react";
import ServiceModal from "../ServiceModal/ServiceModal";
import Counter from "../../assets/utils";

const WhatIDo = ({ language, translations,closeSideBar }) => {
  Counter('services')
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
      <ServiceModal language={language} translations={translations} isOpen={isModalOpen} onClose={closeModal} serviceSelector={currentService} />
      <div className="slideIn" onClick={closeSideBar}>
        <span className="aboutWidth whatIDoContainer">
          <div className='markTittleContainer'>
            <div className='markTittle'> {translations[language].servicesTittle} </div>
            <h1> {translations[language].servicesH1} </h1>
          </div>
          <div className="servicesContainer">
            <ul className="servicesUl">
              {translations[language].services.map((item, index) => (
                <li key={index}>
                  <div onClick={() => openModal(index)}>
                    <div className="servicesTittle">
                      <span className="number">{item.number}</span>
                      <h3>{item.serviceH3}</h3>
                    </div>
                    <div className="servicesDesc">
                      <p>{item.serviceP}</p>
                      <span className="readMore"><p>{translations[language].servicesReadMore}</p><div></div></span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </span>
      </div>
    </>
  )
}

export default WhatIDo