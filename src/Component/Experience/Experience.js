import React from 'react'
import './exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>The skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className='experience__details'>
            <div className="experience__icon"><BsPatchCheckFill/></div>
              <h4>HTML</h4>
              <small>Intermediate</small>
            </article>
            <article className='experience__details'>
            <div className="experience__icon"><BsPatchCheckFill/></div>
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>
            <article className='experience__details'>
            <div className="experience__icon"><BsPatchCheckFill/></div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
            </article>
            <article className='experience__details'>
              <div className="experience__icon"><BsPatchCheckFill/></div>
              <h4>DSA</h4>
              <small>Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
