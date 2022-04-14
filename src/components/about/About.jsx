import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { BsAward } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ months</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>1+</small>
            </article>
          </div>
          <p>
            Welcome to my portfolio, I have experience in personal and school projects, I want to continue learning more about web development, I am passionate about programming, when I don't know how to solve a problem I investigate until I find the solution, looking for a job opportunity to develop professionally.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's To Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About