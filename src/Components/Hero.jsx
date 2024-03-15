import React from 'react'
import dayHero from '../images/dayHero.svg'
import styles from '../styles'

const Hero = () => {
  return (
    <section id='Home' className={`${styles.padding} flex flex-col sm:flex-row `}>

    <div id='bio' className='flex-1 flex items-center justify-center text-center  mb-4 md:mb-0 text-tccred  '>
        <div className='z-[10]'>
        <div className='uppercase font-stint text-[50px]'>
        a <br/> web development
        <br/> blog 
        </div>

        <div className='font-lobster text-[40px] tracking-wide pt-10'>starring 
          </div>
<div className='font-wellfleet text-[45px] pt-2'>
Christine Hoang & Joe Aguado</div>
        </div>
    </div>

    <div className='flex-1 flex justify-center relative'>
        <img src={dayHero} alt='herologo' className='max-w-full relative z-[5]' />
        <div className = "absolute z-[0] w-[30%] h-[40%] top-5 left-10 pink__gradient"/>
        <div className = "absolute z-[0] w-[50%] h-[50%] left-30 bottom-20 yellow__gradient" />
        <div className = "absolute z-[0] w-[60%] h-[70%] -right-10 -bottom-5 orange__gradient" /> 

    </div>

    </section>
  )
}

export default Hero