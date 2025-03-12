import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


  return (
    <header className="header">
      <NavLink to='/'>yeonFLIX</NavLink>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/tvseries'>TV Series</NavLink>
      </div>
    </header>  
  )
}

export default Header