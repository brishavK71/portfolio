import React from 'react'
import './about.css'
import aboutme from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about-me__img">
            <img src={aboutme} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className='about__icon'><FaAward /></div>
              <h5>Experience</h5>
              <small>under graduate</small>
            </article>
            <article className="about__card">
            <div className='about__icon'><FaPeopleArrows /></div>
              <h5>Clients</h5>
              <small>None</small>
            </article>
            <article className="about__card">
            <div className='about__icon'><AiOutlineProject /></div>
              <h5>Projects</h5>
              <small>10+ individual projects</small>
            </article>
          </div>
          <div className="description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque non unde eius culpa officiis suscipit vitae nostrum nemo optio possimus nobis repudiandae eveniet, fugiat quae vero ratione consectetur saepe ex. Dolore, distinctio error? Ex, temporibus. Consequatur dolorem ratione cupiditate?</p></div>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
