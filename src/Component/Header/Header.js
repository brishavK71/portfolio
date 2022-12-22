import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/me-1.jpeg'
const Header = () => {
  return (
    <div>
      <header className="container header__container">
        <h5>Hello I am</h5>
        <h2>Brishav U. Kuikel</h2>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="hello" />
        </div>

        <a href="#contact" className='scroll__down'>scroll down</a>

      </header>
    </div>
  )
}

export default Header
