import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container grid">
            <h1 className="footer__title">Sahil</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">AboutProject</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Project</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/sahil-wagh-665a31248/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/Sahilwagh03" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/sahil_wagh03/" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            </div>

            <span className="footer__copy">
                &#169; Sahil. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer