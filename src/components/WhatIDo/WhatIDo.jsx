import "./WhatIDo.css"

const WhatIDo = () => {
  return (
    <div className="slideIn">
      <span className="aboutWidth whatIDoContainer">
        <div className='markTittleContainer'>
          <div className='markTittle'> SERVICES </div>
          <h1> What I Do </h1>
        </div>
        <div className="servicesContainer">
          <ul className="servicesUl">
            <li>
              <div>
                <div>
                  <span className="number">01</span>
                  <h3>Custom Web Design and Development</h3>
                </div>
                <div>
                  <p>Create tailor-made websites for clients that suit their specific needs and goals.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <span className="number">02</span>
                  <h3>Website Redesign</h3>
                </div>
                <div>
                  <p>Enhance and update existing websites to improve their appearance and functionality.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <span className="number">03</span>
                  <h3>E-commerce Development</h3>
                </div>
                <div>
                  <p>Build online stores with e-commerce functionality, shopping carts, and payment gateways.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <span className="number">04</span>
                  <h3>Maintenance and Support</h3>
                </div>
                <div>
                  <p>Offer ongoing maintenance, updates, and technical support services for websites.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <span className="number">05</span>
                  <h3>User Experience (UX) Consulting</h3>
                </div>
                <div>
                  <p>Advise on how to improve website usability and overall user experience.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <span className="number">06</span>
                  <h3>Web Application Development</h3>
                </div>
                <div>
                  <p>Craft bespoke web apps tailored to unique client requirements for seamless digital experiences.</p>
                  <span className="readMore">READ MORE</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </span>
    </div>
  )
}

export default WhatIDo