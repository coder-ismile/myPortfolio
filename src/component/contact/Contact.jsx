import React from 'react'
import './Contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pxvpmt4', 'template_v1uz9z5', form.current, 'PbX0g6PLKgiiQIS_R')
    e.target.reset()

  };

  return (
   <section id='contact'>
    <h5>Get In Tuch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>ismilemallick31242@gmail.com</h5>
        <a href="mailto:ismilemail31242@gmail.com" target="__blank">Send a message</a>  
        </article>
        <article className="contact__option">
       <RiMessengerLine className='contact__option-icon'/>
        <h4>Messanger</h4>
        <h5>RajaMallick</h5>
        <a href="https://m.me/raja.mallick.3726"target="__blank">Send a message</a>  
        </article>
        <article className="contact__option">
       <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+916296910991</h5>
        <a href="https://api.whatsapp.com/send?phone+916296910991"target="__blank">Send a message</a>  
        </article>
        </div>
        {/* END OF THE CONTACT OPERATION */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
     
    </div>

   </section>
  )
}

export default Contact
