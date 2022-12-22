import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t0zh10b', 'template_w8oszhb', form.current, 'UHBX7wENcjNagJV2l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__details'>
            <div className="contact__icon">
            <MdOutlineMail/>
            </div>
            <h4>E-mail</h4>
            <h5>brishavK71@gmail.com</h5>
            <a href="mailto:brishavK71@gmail.com">Send a message</a>
          </article>
          <article className='contact__details'>
            <div className="contact__icon">
            <BsMessenger/>
            </div>
            <h4>Messenger</h4>
            <h5>Brishav Kuikel</h5>
            <a href="https://m.me/brishav.kuikel.7" target="_blank" rel="noreferrer noopener">Send a message</a>
          </article>
          <article className='contact__details'>
            <div className="contact__icon">
            <BsWhatsapp/>
            </div>
            <h4>WhatsApp</h4>
            <h5>+977-9865150192</h5>
            <a href="https://api.whatsapp.com/send?phone=9865150192" target="_blank" rel="noreferrer noopener">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email ' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className="btn-from"><button typeof='submit' className='btn btn-primary'> Send Message</button></div>
        </form>
      </div>

    </section>
  )
}

export default Contact
