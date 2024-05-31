import React from 'react'
import LoginButton from '../Components/LoginButton'
import LogoutButton from '../Components/LogoutButton'
import Profile from '../Components/Profile'
import logo from "../assets/images/Logo-removebg-preview.png"
import "../CSS_files/movie-main.css"


const NavBar = () => {
  return (
    <nav className="nav-bar">
    <div className='logos'>
<img src={logo} alt='' />
<h2>Mumble</h2>
    </div>
    <div className='search'>
        <input type='text' placeholder='Search movies' />
    </div>
    {
   
}
    <div className='interaction'>
       <LoginButton />
       <Profile />
       <LogoutButton />  

    </div>
</nav>
  )
}

export default NavBar