import React from 'react'
import dayHero from '../images/dayHero.svg'
import styles from '../styles'

const Hero = () => {
  return (
    <section id='Home' className={`${styles.padding} flex flex-col sm:flex-row`}>

    <div id='bio' className='flex-1 flex items-center justify-center text-center  mb-4 md:mb-0 text-tccred'>
        <div>
        A Dallas-based web development blog starring Christine Hoang & Joe Aguado
        </div>
    </div>

    <div className='flex-1 flex justify-center relative'>
        <img src={dayHero} alt='herologo' className='max-w-full h-auto relative z-[5]' />
        <div className = "absolute z-[0] w-[30%] h-[40%] top-5 left-10 pink__gradient"/>
        <div className = "absolute z-[0] w-[50%] h-[50%] left-30 bottom-20 yellow__gradient" />
        <div className = "absolute z-[0] w-[60%] h-[70%] -right-10 -bottom-5 orange__gradient" /> 

    </div>

    </section>
  )
}

export default Hero