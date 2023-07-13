import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const social = () => {
  return (
      <div className='header__social'>
        <a href="https://github.com/brishavK71" target="_blank" rel="noopner noreferrer">
            <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/brishav-kuikel-b2b78025a/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin/>
        </a>
        
        <a href="https://www.instagram.com/b_kuikel71/" target="_blank" rel="noopener noreferrer">
            <BsInstagram/>
        </a>
    </div>
  )
}

export default social 
