import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { BsBootstrap } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 className="experience__details-icon"/>
              <div><h4>HTML</h4></div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className="experience__details-icon"/>
              <div><h4>CSS</h4></div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className="experience__details-icon"/>
              <div><h4>JavaScript</h4></div>
            </article>
            <article className='experience__details'>
              <BsBootstrap className="experience__details-icon"/>
              <div><h4>Bootstrap</h4></div>
            </article>
            <article className='experience__details'>
              <FaReact className="experience__details-icon"/>
              <div><h4>React</h4></div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPhp className="experience__details-icon"/>
              <div><h4>PHP</h4></div>
            </article>
            <article className='experience__details'>
              <SiMysql className="experience__details-icon"/>
              <div><h4>MySQL</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience