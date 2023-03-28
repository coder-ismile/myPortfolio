import React, { useState } from 'react'
import'./Header.css'
import { FiHome } from 'react-icons/fi'


const Header = () => {
  /*================ Toggle Menu ================*/
  const[Toggle , showMenu] = useState(false);
  return (
   <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav_logo">Ismile</a>
      <div className={ Toggle ? "nav__menu show-menu" : " nav__menu"}>
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <i className="uil uil-estate nav__icon"></i>Home 
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="uil uil-user nav__icon"></i>About
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="uil uil-file-alt nav__icon"></i>Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="uil uil-scenery nav__icon"></i> Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="uil uil-message nav__icon"></i> Contact
            </a>
          </li>
        </ul>
        <i className="uil uil-times nav__close"  
        onClick={()=> showMenu(!Toggle)}></i>
      </div>
        <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
        </div>
    </nav>
   </header>

  )
}

export default Header


 //  <header>
    //   <div className="container header_container">
    //     <h5>Hello, my name is </h5>
    //     <h1>Ismile Mallick</h1>
    //     <h5 className="text-light">I'm a Front-End Devoloper</h5>
    //     <CTA/>
    //     <HeaderSocial/>
    //     <div className="me">
    //       <img src="./assets/me2.png" alt="" />
    //     </div>
    //     <a href="#contact" className="scroll__down">Scroll Down </a>
    //   </div>
    //  </header>