import React from 'react'
import './about.css'
import AboutImg from "../../assets/sahilP.jpg"
import Info from './Info'


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info/>

                <p className="about__description">
                    Frontend developer, I create ewb pages with UI / UX user
                    interface, I have ability to write efficient code for a wide range of projects.
					I have experience working with a HTML, CSS, JavaScript and React 
                </p>


            </div>
        </div>
    </section>
  )
}

export default About