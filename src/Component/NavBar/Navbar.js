import React, { useState } from 'react'
import './nav.css'
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineBulb} from 'react-icons/ai'
import {MdConnectWithoutContact} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
const Navbar = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="!#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active': ''}><BiHomeCircle/> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active': ''}><FcAbout/> </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === "#experience" ? 'active': ''}><AiOutlineBulb/> </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active': ''}><MdConnectWithoutContact/> </a>
      
    </nav>
  )
}

export default Navbar
