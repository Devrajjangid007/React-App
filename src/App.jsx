import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contect from './pages/Contect'
import Home from './pages/Home'
import Project from './pages/Project'

const App = () => {
  return (
    <div className='text-white'>

      <Routes>
        <Route path='/contect' element={<Contect/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
      
      
      </div>
  )
}

export default App