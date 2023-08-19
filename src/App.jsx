import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'
import SideBar from './components/SideBar/SideBar'
import AboutMe from './components/AboutMe/AboutMe'
import WhatIDo from './components/WhatIDo/WhatIDo'
import Portfolio from './components/Portfolio/Portfolio'
import News from './components/News/News'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <main>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/whatido' element={<WhatIDo />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/news' element={<News />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
