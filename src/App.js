import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Fadecomponent from './components/FadeComponent/Fadecomponent';


function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <Fadecomponent>
      <About/>
      </Fadecomponent>
      <Fadecomponent>
      <Skills/>
      </Fadecomponent>
      <Fadecomponent>
      <Project/>
      </Fadecomponent>
      <Fadecomponent>
      <Contact/>
      </Fadecomponent>
      <Footer/>
    </main>
    </>
  );
}

export default App;
