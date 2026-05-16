import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Contect from './Pages/Contect'
import Product from './Pages/Product'
import Home from './Pages/Home'


const App = () => {
  return (
    <div className='text-white'>

       <Routes>

        <Route path='/contect' element={<Contect/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/' element={<Home/>} />



      </Routes>

     
      
      
      
      </div>
  )
}

export default App