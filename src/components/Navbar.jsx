import React from 'react'
import Form from './Form'
import { NavLink } from 'react-router-dom'
// import { SpaceBar } from '@material-ui/icons'
const Navbar = () => {
  return (
    <>
    <div className='nav-style'>
        <NavLink exact activeClassName='active-class' to='/form' >Home</NavLink><br/>
        <NavLink exact activeClassName='active-class' to="/form" >Form</NavLink>

    </div>
    </>
  )
}

export default Navbar
