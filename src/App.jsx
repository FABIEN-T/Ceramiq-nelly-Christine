// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Nelly from './pages/Nelly'
import Christine from './pages/Christine'
// import Artist from './pages/Artist'
// import About from './pages/About'
// import LodgingSheet from './pages/LodgingSheet'
// import Error from './pages/Error'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nelly" element={<Nelly />} />
          <Route path="/christine" element={<Christine />} />
          {/* <Route path="/lodging-sheet/:id" element={<LodgingSheet />} /> */}
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
