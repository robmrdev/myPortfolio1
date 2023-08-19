import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='aboutWidth portfolioContainer'>
      <div className='topWrapper'>
        <div className='markTittleContainer'>
          <div className='markTittle'> PORTFOLIO </div>
          <h1> My Portfolio </h1>
        </div>
        <div className='portfolioTop'>
          <ul>
            <li> All </li>
            <li> JavaScript </li>
            <li> React </li>
            <li> Others </li>
          </ul>
        </div>
      </div>
      <div className='flexWrapper'>
        <ul>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
          <li>
            <img src="https://dummyimage.com/500x500/000/fff" alt="" />
          </li>
        </ul>

      </div>
    </section>
  )
}

export default Portfolio