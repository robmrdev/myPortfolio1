import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='slideIn'>
      <section className='personalInfo'>
        <div className='markTittleContainer'>
          <div className='markTittle'> ABOUT </div>
          <h1>About Me</h1>
            <img src="https://dummyimage.com/990x570/000/ffffff&text=Photo" alt="" />
        </div>
        <div className='aboutWidth'>
          <h2>Robert Mendoza</h2>
          <h4 className='bottomLine'>Web Developer</h4>
          <p>Hello! My name is Robert Mendoza, and I'm a passionate programmer and developer. My journey began out of curiosity and
            quickly evolved into a profound passion. From day one, I've been enthusiastic about with every aspect of coding.</p>
          <p className='bottomLine'>
            At present, my specialization is centered on in taking ideas from inception and crafting fully functional websites. I don't
            just focus on responsive and attractive design; I go beyond that to create a unique, outstanding, and contemporary look and
            feel. My next step is integrating these ideas seamlessly into the client's project, ensuring minimal to no maintenance while
            ensuring they run smoothly for an extended period.
          </p>
        </div>
        <div className='aboutFlex bottomLine'>
          <ul className='left'>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Age: </strong>
              <span> {new Date().getFullYear() - new Date('1990-11-07').getFullYear() - (new Date().getMonth() < 10
                || (new Date().getMonth() === 10 && new Date().getDate() < 7) ? 1 : 0)}</span>
            </li>
            <li>
              <strong>Location: </strong>
              <span> Buenos Aires, Argentina</span>
            </li>
            <li>
              <strong>Email: </strong>
              <span> <a href="mailto:robmrivas@gmail.com"> robmrivas@gmail.com</a></span>
            </li>
          </ul>
          <ul className='right'>
            <li>
              <strong>Nationality: </strong>
              <span> Venezuelan</span>
            </li>
            <li>
              <strong>Study: </strong>
              <span> Universidad de Los Andes</span>
            </li>
            <li>
              <strong>Degree: </strong>
              <span> Unfinished</span>
            </li>
            <li>
              <strong>Freelance: </strong>
              <span> Avalible</span>
            </li>
          </ul>
        </div>
        <div className='aboutButton'>
          <a href="#">
            <span>Download CV</span>
          </a>
        </div>
      </section>
      <section className='alterBG'>
        <div className='aboutWidth progressWrapper'>
          <h3>Programming Skills</h3>
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
          <h3>Knowledge</h3>
          <ul>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>SASS</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Boostrap</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Git</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Github</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Vite</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>NodeJs</p>
            </li>
          </ul>
        </div>
        <div className='right'>
          <h3>Interests</h3>
          <ul>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Stack MERN</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Create Mobile App</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Site Optimization</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>Custom Website</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>UX/UI Design</p>
            </li>
            <li>
              <i class="fi fi-br-angle-right"></i>
              <p className='knowledgeP'>JavaScript</p>
            </li>
          </ul>
        </div>
      </section>
      <section className='alterBG educationWrapper'>
        <div className='aboutWidth'>
          <h3>Education</h3>
          <div className='knowledge aboutFlex'>
            <div className='left'>
              <ul>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>Dec-2022 / Feb 2023</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>Web Development</h4>
                    <p>Certificate</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>Feb-2023 / Apr-2023</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>Javascript</h4>
                    <p>Certificate</p>
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
                    <p>Certificate</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <div className='educationTimeContainer'>
                    <p className='educationTime'>Aug-2023 / Ongoing</p>
                  </div>
                  <div className='educationInfo'>
                    <h4>Backend Development</h4>
                    <p>Certificate</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe