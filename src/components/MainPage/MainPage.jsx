import './MainPage.css'

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
      <div className='mainleft'>
        <img src="https://dummyimage.com/300x300/000/ffffff&text=Photo" alt="" />
      </div>
      <div className='mainRight'>
        <h1>ROBERT MENDOZA</h1>
        <h3>Programmer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem id illum iusto, voluptas incidunt possimus temporibus.</p>
        <div>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default MainPage