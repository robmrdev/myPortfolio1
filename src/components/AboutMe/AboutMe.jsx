import './AboutMe.css'
import CertfModal from '../CertfModal/CertfModal'
import { useState, useEffect } from 'react'

const AboutMe = ({ language, translations, closeSideBar }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertf, setCurrentCertf] = useState(1);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = (currentCertf) => {
    setCurrentCertf(currentCertf);
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
    <CertfModal  isOpen={isModalOpen} onClose={closeModal} imageSelector={currentCertf}/>
    <div className='slideIn' onClick={closeSideBar}>
      <section className='personalInfo'>
        <div className='markTittleContainer'>
          <div className='markTittle'>{translations[language].aboutTittle}</div>
          <h1>{translations[language].aboutH1}</h1>
          <div className='profilePic'>
            <img src="../img/profile.jpeg" alt="Profile Pic" />
          </div>
        </div>
        <div className='aboutWidth'>
          <h2>Robert Mendoza</h2>
          <h4 className='bottomLine'>{translations[language].aboutRole}</h4>
          <p>{translations[language].aboutDescription1}</p>
          <p className='bottomLine'>{translations[language].aboutDescription2}</p>
        </div>
        <div className='aboutFlex bottomLine'>
          <ul className='left'>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong1}: </strong>
              <span> {translations[language].aboutLiSpan1}</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong2}: </strong>
              <span> {new Date().getFullYear() - new Date('1990-11-07').getFullYear() - (new Date().getMonth() < 10
                || (new Date().getMonth() === 10 && new Date().getDate() < 7) ? 1 : 0)}</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong3}: </strong>
              <span> Buenos Aires, Argentina</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>Email: </strong>
              <span> <a href="mailto:robmr.dev@gmail.com"> robmr.dev@gmail.com</a></span>
            </li>
          </ul>
          <ul className='right'>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong5}: </strong>
              <span> {translations[language].aboutLiSpan5}</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong6}: </strong>
              <span> Universidad de Los Andes</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>{translations[language].aboutLiStrong7}: </strong>
              <span> {translations[language].aboutLiSpan7}</span>
            </li>
            <li className='aboutInfoLi'>
              <strong>Freelance: </strong>
              <span> {translations[language].aboutLiSpan8}</span>
            </li>
          </ul>
        </div>
        <div className='aboutButton'>
          <a href="../Document.pdf" target='_blank'>
            <span>{translations[language].aboutDownload}</span>
          </a>
        </div>
      </section>
      <section className='alterBG'>
        <div className='aboutWidth progressWrapper'>
          <h3>{translations[language].aboutSkills}</h3>
          <div className='aboutFlex'>
            <ul className='left'>
              <li>
                <span className='skillName'>
                  <h5>HTML</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>CSS</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>Node JS</h5>
                  <h5>60%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "60%" }}></div>
                </div>
              </li>
            </ul>
            <ul className='right'>
              <li>
                <span className='skillName'>
                  <h5>Javascript ES6+</h5>
                  <h5>70%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "70%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>React</h5>
                  <h5>80%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "80%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='knowledge aboutFlex aboutWidth'>
        <div className='left'>
          <h3>{translations[language].aboutKnowledge}</h3>
          <ul>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>SASS</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Boostrap</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Git</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Github</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Vite</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>NodeJs</p>
            </li>
          </ul>
        </div>
        <div className='right'>
          <h3>{translations[language].aboutInterest}</h3>
          <ul>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Stack MERN</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>{translations[language].aboutInterestLi2}</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>{translations[language].aboutInterestLi3}</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>{translations[language].aboutInterestLi4}</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>{translations[language].aboutInterestLi5}</p>
            </li>
            <li>
              <i className="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>{translations[language].aboutInterestLi6}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className='alterBG educationWrapper'>
        
        <div className='aboutWidth'>
          <h3>{translations[language].aboutLiStrong6}</h3>
          <div className='knowledge aboutFlex'>
            <div className='left'>
              <ul>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>{translations[language].aboutEducationTime1}</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>{translations[language].aboutEducationTittle1}</h4>
                    <p onClick={() => openModal(1)}>{translations[language].aboutEducationCertificate}</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>{translations[language].aboutEducationTime2}</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>Javascript</h4>
                    <p onClick={() => openModal(2)}>{translations[language].aboutEducationCertificate}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='right'>
              <ul>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>May-2023 / Jul-2023</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>React</h4>
                    <p onClick={() => openModal(3)}>{translations[language].aboutEducationCertificate}</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>{translations[language].aboutEducationTime4}</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>{translations[language].aboutEducationTittle4}</h4>
                    <p>{translations[language].aboutEducationCertificate}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AboutMe