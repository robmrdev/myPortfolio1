import "./PortfolioModal.css"
import { useState } from "react";
import portfolioData from "../../data/data.json"

const portfolioPool = {
    1: "certf1",
    2: "certf2",
    3: "certf3",
    4: "certf1",
    5: "certf2",
    6: "certf3"
}



const PortfolioModal = ({ isOpen, onClose, portfolioSelector, language, translations }) => {
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
        <div className='modalContainer' onClick={onClose}>
            <div className='serviceWrapper'>
                <div className='closeService'>
                    <i className='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className="portfolioGalery">
                        <img src={selectedPortfolio.img1} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={selectedPortfolio.img2} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={selectedPortfolio.img3} alt="" className={isHovered ? '' : 'portfolioGaleryMiddle'} />
                        <img src={selectedPortfolio.img4} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                        <img src={selectedPortfolio.img5} alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    </div>
                    <div className="portfolioModalHead">
                        <h2>{translations[language].newsH21}</h2>
                        <div className="techContainer">{ }
                            {selectedPortfolio.techLogos.map((item) => (
                                <div>
                                    <div className={item.name.toLowerCase()}>
                                        <i className={item.class}></i>
                                    </div>
                                        <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <article>
                        <p>{translations[language].newsP11}</p>
                        <p>{translations[language].newsP12}</p>
                        <p>{translations[language].newsP12}</p>
                    </article>
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
                </div>

            </div>
        </div>
    )
}

export default PortfolioModal