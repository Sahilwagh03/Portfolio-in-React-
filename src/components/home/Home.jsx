import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <motion.div className="home__img"
                    initial={{opacity:0 , x:50}}
                    animate={{opacity:1 , x:0}}
                    transition={{duration:0.5 ,delay:0.5}}></motion.div>

                <Data/>
            </div>

            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home