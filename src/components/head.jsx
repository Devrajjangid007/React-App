import React from 'react'
import { Link } from 'react-router-dom'

function Dhead() {
  return (
    <div>
      <Link to='/' >Home</Link>
      <Link to='/project' >project</Link>
      <Link to='/contect' >contect</Link>
    </div>
  )
}

export default Dhead