import React from 'react'
import './skills.css'
// import Frontend from './Frontend'
// import Language from './Language'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import node from '../../assets/node.png'
import cpp from '../../assets/cpp.png'
import git from '../../assets/git.png'
import api from '../../assets/api.png'
import py from '../../assets/python.png'
import mongodb from '../../assets/mongodb-png.png'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Techhnical level</span>


      <div className="skills_container skills_grid">
        <div className="skills_main">
          <div className="skills_icons_grid">
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#dcf6ff' }}>
                <img src={react} alt="" />
              </div>
              <p>React js</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#fff2db' }}>
                <img src={html} alt="" />
              </div>
              <p>HTML</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#94d1fc63' }}>
                <img src={css} alt="" />
              </div>
              <p>CSS</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#ffffca' }}>
                <img src={js} alt="" />
              </div>
              <p>Javascript</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#d7f5e5' }}>
                <img src={node} alt="" />
              </div>
              <p>Node Js</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: 'rgb(210 255 231)' }}>
                <img src={mongodb} alt="" />
              </div>
              <p>Mongodb</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info">
                <img src={api} alt="" />
              </div>
              <p>Api</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#7dc4ff40' }}>
                <img src={py} alt="" />
              </div>
              <p>Python</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info" style={{ background: '#fff2db' }}>
                <img src={git} alt="" />
              </div>
              <p>Git</p>
            </div>
            <div className="skills_grid_div">
              <div className="skills_info">
                <img src={cpp} alt="" />
              </div>
              <p>C++</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills