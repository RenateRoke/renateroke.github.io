import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Home from './pages/Home.jsx'
import OverMij from './pages/OverMij.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <NavBar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overmij" element={<OverMij />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    </>
  )
}

export default App