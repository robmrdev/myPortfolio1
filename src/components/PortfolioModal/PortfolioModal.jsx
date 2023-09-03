import "./PortfolioModal.css"
import { useState } from "react";
import portfolioData from "../../data/data.json"


const PortfolioModal = ({ isOpen, onClose, portfolioSelector, language, translations, filteredModal, filteredPortfolio }) => {
    if (!isOpen) return null;
    const selectedPortfolio = portfolioData.portfolio[portfolioSelector]


    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='modalContainer slideIn' onClick={onClose}>
            <div className='serviceWrapper'>
                <div className='closeService'>
                    <i className='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className="portfolioGalery">
                        <img src={filteredPortfolio[portfolioSelector].img3} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={filteredPortfolio[portfolioSelector].img2} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={filteredPortfolio[portfolioSelector].img1} alt="" className={isHovered ? '' : 'portfolioGaleryMiddle'} />
                        <img src={filteredPortfolio[portfolioSelector].img4} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={filteredPortfolio[portfolioSelector].img5} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    </div>
                    <div className="portfolioModalHead">
                        <h2>{filteredModal[portfolioSelector].h1}</h2>
                        <div className="techContainer">
                            {filteredPortfolio[portfolioSelector].techLogos.map((item, index) => (
                                <div key={index}>
                                    <div className={item.name.toLowerCase()}>
                                        <i className={item.class}></i>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <article>
                        <p>{filteredModal[portfolioSelector].portfolioP1}</p>
                        <p>{filteredModal[portfolioSelector].portfolioP2}</p>
                        <p>{filteredModal[portfolioSelector].portfolioP3}</p>
                    </article>
                    <div className="portfolioBottom">
                        <div className='shareDiv'>
                            <strong>{translations[language].share} </strong>
                            <div className='facebookColor'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='xColor'>
                                <i className="fa-brands fa-x-twitter"></i>
                            </div>
                            <div className='linkedinColor'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <i></i>
                        </div>
                        <span>
                                <a href={filteredPortfolio[portfolioSelector].site} target="_blank">Go to site</a>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioModal