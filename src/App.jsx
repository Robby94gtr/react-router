import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='Chi siamo' Component={ChiSiamo} />
          <Route path='Prodotti' Component={Products} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
