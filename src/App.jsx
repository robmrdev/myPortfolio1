import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import translations from './translations/translations.json'

import MainPage from './components/MainPage/MainPage'
import SideBar from './components/SideBar/SideBar'
import AboutMe from './components/AboutMe/AboutMe'
import WhatIDo from './components/WhatIDo/WhatIDo'
import Portfolio from './components/Portfolio/Portfolio'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import TopBar from './components/TopBar/TopBar'
import BlackAndWhiteButton from './components/BlackAndWhiteButton/BlackAndWhiteButton'
import LanguageButton from './components/LanguageButton/LanguageButton'

function App() {

  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <BrowserRouter>
        <SideBar isOpen={menuAbierto} language={language} translations={translations}/> 
        <main>
        <LanguageButton currentLanguage={language} onChangeLanguage={handleChangeLanguage} />
          <BlackAndWhiteButton />
          <TopBar  toggleMenu={toggleMenu} menuAbierto={menuAbierto} />
          <Routes>
            <Route path='/' element={<MainPage language={language} translations={translations}/>} />
            <Route path='/aboutme' element={<AboutMe language={language} translations={translations} />} />
            <Route path='/whatido' element={<WhatIDo language={language} translations={translations} />} />
            <Route path='/portfolio' element={<Portfolio language={language} translations={translations} />} />
            <Route path='/news' element={<News language={language} translations={translations} />} />
            <Route path='/contact' element={<Contact language={language} translations={translations} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
