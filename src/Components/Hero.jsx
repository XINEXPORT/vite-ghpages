import React from 'react'
import dayHero from '../images/dayHero.svg'
import styles from '../styles'
// import HeroImage from './HeroImage'
import road from '../images/road.svg'
import sun from '../images/sun.svg'
import clouds from '../images/clouds.svg'
import { Link } from 'react-router-dom'

import redRoad from '../images/redRoad.svg'
import redSun from '../images/redSun.svg'
import redClouds from '../images/redCloud.svg'

const Hero = () => {
  return (
    <section id='Home' className={`flex flex-col w-full h-screen`}>

    <div id='bio' className={`w-full flex flex-col text-center z-[10] hover:font-bold hover:text-tccred`}>

          <div className='uppercase font-stint text-[24px] xs:text-[32px] md:text-[50px] tracking-wide flex flex-col justify-center items-center m-auto rounded-[20px] p-4 '>
            <div className=''>a</div>  
            <div>web development</div> 
            <div className='tracking-widest text-[32px] md:text-[50px]'>blog </div>
          </div>

          <div className='rounded-[20px] flex flex-col m-auto p-4 w-3/4'>
            <div className='font-lobster text-[28px] xs:text-[30px] tracking-widest md:text-[48px] translate -rotate-3 '>Starring 
            </div>
            <div className='font-wellfleet flex justify-center '>
              <div className='flex flex-1 justify-evenly text-[17px] xs:text-[24px] sm:text-[28px] items-center tracking-tighter max-w-[240px] md:max-w-[320px] md:text-[38px]'>Christine Hoang </div> 
              <div className='text-[19px] xs:text-[28px] sm:text-[32px] flex items-center md:text-[38px]'>&</div> 
              <div className='flex flex-1 tracking-wide xs:tracking-widest text-[19px] xs:text-[26px] sm:text-[32px] items-center justify-evenly max-w-[240px] md:max-w-[320px] md:text-[40px]'>Joe Aguado</div>
            </div>
          </div>


        </div>



      <Link to='in/entries'>
    <div className={`flex flex-col bg-primary relative`}>
      <div className={`flex justify-evenly py-8 sm:py-10`}>
        <img src={sun} alt='herologo' className=' z-[5] max-w-[140px] sm:max-w-[200px]' />
        <img src={clouds} alt='herologo' className='max-w-[140px] z-[5] sm:max-w-[220px]' />
      </div>
        <img src={road} alt='herologo' className=' z-[5]' />
        <div className = "absolute z-[0] w-[10%] h-[10%] top-0 right-0 black__gradient"/>

        <div className = "absolute z-[0] w-[30%] h-[30%] right-0 bottom-0 black__gradient" /> 

    </div>
</Link>

    </section>
  )
}

export default Hero