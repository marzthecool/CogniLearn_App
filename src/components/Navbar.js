import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='navbar'>
        <Link className='nav-brand' to='/'>CogniLearn</Link>
        <div className='navbar-links'>
          <Link to='/course_catalog'>Cursos</Link>
          <Link to='/'>Iniciar sesion</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
