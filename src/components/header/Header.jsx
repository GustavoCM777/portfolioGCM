import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/GCM.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Gustavo</h1>
         <h2>Contreras Martínez</h2>
         <h5 className="text-light">Web Developer</h5>
         <CTA/>
         <HeaderSocial/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header