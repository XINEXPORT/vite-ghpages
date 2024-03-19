import React from 'react'
import dayHero from '../images/dayHero.svg'
import styles from '../styles'

const Hero = () => {
  return (
    <section id='Home' className={`flex flex-col md:flex-row `}>

    <div id='bio' className={`w-full flex-1 flex flex-col text-center mb-4 md:mb-0 text-tccred z-[10]`}>

          <div className='uppercase font-stint text-[24px] xs:text-[32px] lg:text-[38px] tracking-wide py-6'>
          a <br/> web development
          <br/> <span className='tracking-widest text-[32px] sm:text-[42px]'>blog </span>
          </div>

          <div>
            <div className='font-lobster text-[28px] xs:text-[30px] tracking-widest pt-4 sm:text-[40px] translate -rotate-3'>Starring 
            </div>
            <div className='font-wellfleet pt-2 flex justify-evenly'>
              <div className='flex flex-1 justify-evenly text-[18px] xs:text-[24px] sm:text-[28px] items-center tracking-tight'>
              Christine Hoang </div> 
              <div className='text-[20px] sm:text-[28px] flex items-center'>&</div> 
              <div className='flex flex-1 tracking-widest text-[20px] xs:text-[26px] sm:text-[32px] items-center justify-evenly'>Joe Aguado</div>
              </div>
          </div>
        </div>



    <div className={`py-10 flex justify-center relative `}>
        <img src={dayHero} alt='herologo' className=' relative z-[5]' />
        <div className = "absolute z-[0] w-[30%] h-[40%] top-5 left-10 pink__gradient"/>
        <div className = "absolute z-[0] w-[50%] h-[50%] left-30 bottom-20 yellow__gradient" />
        <div className = "absolute z-[0] w-[60%] h-[70%] right-10 -bottom-5 orange__gradient" /> 

    </div>

    </section>
  )
}

export default Hero