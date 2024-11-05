import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { logout } from '../../firebase'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] =useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })

  },[])
  
  return (
    <div className={`navbar ${sticky?'dark-nav':''}`} >
    <div className='navbar-left'>
        <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
            <li><Link to='services' smooth={true} offset={0} duration={500}>Services</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact</Link></li>

        </ul>
        </div>
        <div className="navbar-right">
            <p onClick={()=>{logout()}}>Sign out </p>
        </div>

      
    </div>
  )
}

export default Navbar
