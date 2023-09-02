import './ServiceModal.css'


const newsPool = {
    1: "certf1",
    2: "certf2",
    3: "certf3"
}

const ServiceModal = ({ isOpen, onClose, serviceSelector, language, translations }) => {
    if (!isOpen) return null;

    // const selectedNews = newsPool[newsSelector]

    return (
        <div className='modalContainer slideIn' onClick={onClose}>
            <div className='serviceWrapper'>
                <div className='closeService'>
                    <i className='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className='modalServiceImg' style={{ backgroundImage:`url(${translations[language].services[serviceSelector].img})` }}> </div>
                    <h2>{translations[language].services[serviceSelector].serviceH3}</h2>
                    <article>
                        <p>{translations[language].services[serviceSelector].serviceP1}</p>
                        <p>{translations[language].services[serviceSelector].serviceP2}</p>
                        <p>{translations[language].services[serviceSelector].serviceP3}</p>
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

export default ServiceModal

