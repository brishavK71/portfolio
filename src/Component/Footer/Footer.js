import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="!#" className='footer__logo'>BK</a>
      <ul className="permalinks">
        <li><a href="!#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        
        <a href="https://www.instagram.com/b_kuikel71/" target="_blank" rel="noopener noreferrer">
            <BsInstagram/>
        </a>

        <a href="https://www.facebook.com/brishav.kuikel.7" target="_blank" rel="noopener noreferrer">
            <BsFacebook/>
        </a>

        <a href="https://twitter.com/Brishavkuikel7" target="_blank" rel="noopener noreferrer">
            <BsTwitter/>
        </a>  
        
      </div>
        <div className="footer__copyright">
          <small>&copy;Brishav U. Kuikel. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
