import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products/Products'
import DetailProduct from './pages/Products/DetailProduct'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/Chi siamo' Component={ChiSiamo} />
          <Route path='/Prodotti'>
            <Route index Component={Products} />
            <Route path=':id' Component={DetailProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
