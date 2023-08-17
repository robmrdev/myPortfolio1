import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutContainer'>
      <section className='personalInfo'>
        <div>
          <h1>About Me</h1>
          <img src="https://dummyimage.com/990x570/000/ffffff&text=Photo" alt="" />
        </div>
        <div className='aboutWidth'>
          <h2>Robert Mendoza</h2>
          <h4 className='bottomLine'>Web Developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum tempore aliquam consequatur excepturi
            veritatis sunt facilis molestias deserunt non necessitatibus nesciunt velit pariatur ipsa blanditiis ut minus
            harum, porro tenetur aspernatur. Voluptate labore quaerat aspernatur quasi quidem quod provident?</p>
          <p className='bottomLine'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptatibus facere. Praesentium ab
            recusandae quia animi quod velit id esse. Similique ea rerum quia, neque soluta earum debitis quo quibusdam!
            Deserunt natus eaque error molestias. Deleniti placeat dolorem cum voluptatibus quidem ex iure ad excepturi
            accusamus corrupti commodi, laborum id?</p>
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
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
          </ul>
          <ul className='right'>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
            <li>
              <strong>Birthdate: </strong>
              <span> Nov 07 1990</span>
            </li>
          </ul>
        </div>
        <div className='aboutButton'>
          <button>Download CV</button>
        </div>
      </section>
      <section className='alterBG'>
        <div className='aboutWidth'>
          <h3>Programming Skills</h3>
          <div className='aboutFlex'>
            <ul className='left'>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
            </ul>
            <ul className='right'>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span className='skillName'>
                  <h5>Javascript</h5>
                  <h5>95%</h5>
                </span>
                <div className='progress'>
                  <div style={{ width: "95%" }}></div>
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
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className='right'>
          <h3>Interests</h3>
          <ul>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>
      <section className='alterBG'>
        <div className='aboutWidth'>
          <h3>Education</h3>
          <div className='knowledge aboutFlex'>
            <div className='left'>
              <ul>
                <li className='educationLi'>
                  <p>Feb-2013</p>
                  <div>
                    <h4>Web Development</h4>
                    <p>Certificate</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <p>Feb-2013</p>
                  <div>
                    <h4>Web Development</h4>
                    <p>Certificate</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='right'>
              <ul>
                <li className='educationLi'>
                  <p>Feb-2013</p>
                  <div>
                    <h4>Web Development</h4>
                    <p>Certificate</p>
                  </div>
                </li>
                <li className='educationLi'>
                  <p>Feb-2013</p>
                  <div>
                    <h4>Web Development</h4>
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