import './NewsModal.css'


const newsPool = {
    1: "certf1",
    2: "certf2",
    3: "certf3",
    4: "certf1",
    5: "certf2",
    6: "certf3"
}

const NewsModal = ({ isOpen, onClose, newsSelector, language, translations }) => {
    if (!isOpen) return null;

    const selectedService = newsPool[newsSelector]

    return (
        <div className='modalContainer slideIn' onClick={onClose}>
            <div className='serviceWrapper'>
                <div className='closeService'>
                    <i className='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className='modalServiceImg' style={{ backgroundImage:`url(${translations[language].news[newsSelector].img})` }}> </div>
                    <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].news[newsSelector].newsDate}</p>
                    <h2>{translations[language].news[newsSelector].newsH2}</h2>
                    <article>
                        <p className='bigP'>{translations[language].news[newsSelector].newsP1}</p>
                        <p>{translations[language].news[newsSelector].newsP2}</p>
                        <div className='newsQuote'>
                            <i className="fa-solid fa-quote-left"></i>
                            <p className='bigP'>{translations[language].news[newsSelector].newsP3}</p>
                        </div>
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

export default NewsModal