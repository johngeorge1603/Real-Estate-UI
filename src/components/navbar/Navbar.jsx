import React, { useState } from 'react'
import './Navbar.scss';
import { singlePostData, userData } from '../../library/dummydata'
import { Link } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const user = true;
  return (
    <nav>
        <div className="left">
          <a href="/" className='logo'>
            <i class="fa-solid fa-sign-hanging fa-2xl"></i>
            <span><h1>Real Estate App</h1></span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          {user? 
            (<div className='user'>
              <img src={userData.img} alt="" />
              <span>{userData.name}</span>
              <Link to={'/profile'} className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>)
            :(
            <>
              <a href="/">Sign In</a>
              <a href="/" className='reg'>Sign Up</a>
            </>
            )}
          <div className='menuIcon'>
            <i class="fa-solid fa-bars fa-xl text-light bg-light" onClick={() => setMenuOpen(prev => !prev)}></i>
          </div>
          <div className={menuOpen? "menu active": "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>

        </div>
    </nav>
    
  )
}

export default Navbar