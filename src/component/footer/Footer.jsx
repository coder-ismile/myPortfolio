import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import{IoLogoTwitter} from 'react-icons/io'
import './Footer.css'
const Footer = () => {
  return (
   <footer id='footer'>
    <a href="#" className='footer__logo'>IsmileTech</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twiter.com"> <IoLogoTwitter/> </a>
    </div>
    <div className="footer__copyright">
      <small>&copy; IsmileTech. All right reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
