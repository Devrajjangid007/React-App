import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import Home from './pages/Home'
import Contect from './pages/contect'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contect' element={<Contect />} />
    </Routes>



   </div>
  )
}

export default App


