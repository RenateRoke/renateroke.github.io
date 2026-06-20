import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './pages/Home.jsx'
import OverMij from './pages/OverMij.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
    <NavBar />
    <main id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overmij" element={<OverMij />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  )
}

export default App
