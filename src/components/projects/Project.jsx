import React from 'react'
import './project.css';
// import Works from './Works';
import { projectData } from './Data'

const Project = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>

      {/* <Works /> */}

      <div className="All_projects_grid">
        {
          projectData.map((project) => (
            <div className="project_container" key={project.id}>
              <div className="project_img">
                <a href={project.Link} target="_blank">
                  <img src={project.image} alt="" />
                </a>
              </div>
              <div className="project_info">
                <h3>{project.title}</h3>
                <p>{project.decription}</p>
                <div className="Techstack">
                  <p>React</p>
                  <p>Css</p>
                </div>
                <div className="project_links">
                  <div className='code'>
                    <a href={project.gitLink} target='_blank'>
                      <a href={project.gitLink} target='_blank'>
                        code</a><i className='bx bxl-github'></i>
                    </a>
                  </div>
                  <div className='code'>
                    <a href={project.Link} target="_blank">
                      <a href={project.Link} target="_blank">Live Demo</a>
                      <i className='bx bx-link-external'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Project