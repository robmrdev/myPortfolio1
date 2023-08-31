import "./PortfolioModal.css"
import { useState } from "react";

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

    const selectedPortfolio = portfolioPool[portfolioSelector]

    
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
                    <i class='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className="portfolioGalery">
                        <img src="https://dummyimage.com/400x600/000/fff" alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}/>
                        <img src="https://dummyimage.com/400x600/c448c4/fff" alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}/>
                        <img src="https://dummyimage.com/400x600/485fc2/fff" alt="" className={isHovered ? '' : 'portfolioGaleryMiddle'}/>
                        <img src="https://dummyimage.com/400x600/4cc24a/0011ff" alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}/>
                        <img src="https://dummyimage.com/400x600/c5cf3a/0011ff" alt="" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}/>
                    </div>
                    <h2>{translations[language].newsH21}</h2>
                    <article>
                        <p>{translations[language].newsP11}</p>
                        <p>{translations[language].newsP12}</p>
                        <p>{translations[language].newsP12}</p>
                    </article>
                    <div className='shareDiv'>
                        <strong>{translations[language].share} </strong>
                        <div className='facebookColor'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='xColor'>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                        <div className='linkedinColor'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <i></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioModal