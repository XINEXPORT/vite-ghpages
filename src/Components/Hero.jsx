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
    <section id='Home' className={`flex flex-col w-full h-full`}>

    <div id='bio' className={`w-full flex flex-col text-center z-[10] `}>

        <Link to='in/entries'>
          <div className='uppercase font-stint text-[24px] xs:text-[28px] md:text-[50px] tracking-wide flex flex-col justify-center items-center m-auto rounded-[20px] transform md:hover:scale-110 ease-in-out duration-300'>
            <div className=''>a</div>  
            <div>web development</div> 
            <div className='tracking-widest text-[32px] md:text-[50px]'>blog </div>
          </div>
        </Link>

        <Link to='in/about'>
          <div className='rounded-[20px] flex flex-col m-auto justify-center items-center w-full transform md:hover:scale-110 ease-in-out duration-300'>
            <div className='font-lobster text-[30px] xs:text-[30px] tracking-widest md:text-[48px] translate -rotate-3 w-full'>Starring 
            </div>
            <div className='font-wellfleet flex justify-evenly w-full xs:max-w-[500px] md:max-w-[700px]'>
              <div className='flex justify-evenly text-[21px] xs:text-[24px] sm:text-[28px] items-center tracking-tighter  md:text-[38px] pr-1 w-full'>Christine Hoang </div> 
              <div className='text-[22px] xs:text-[28px] sm:text-[30px] flex items-center md:text-[38px]'> &</div> 
              <div className=' w-full flex  tracking-widest xs:tracking-widest text-[22px] xs:text-[24px] sm:text-[28px] items-center justify-evenly md:text-[40px]'>Joe Aguado</div>
            </div>
          </div>
          </Link>

        </div>




    <div className={`flex flex-col bg-primary relative`}>
      <div className={`flex justify-evenly py-8 sm:py-10`}>
        <img src={sun} alt='herologo' className=' z-[5] max-w-[140px] sm:max-w-[200px]' />
        <img src={clouds} alt='herologo' className='max-w-[140px] z-[5] sm:max-w-[220px]' />
      </div>
        <img src={road} alt='herologo' className=' z-[5]' />
        <div className = "absolute z-[0] w-[10%] h-[10%] top-0 right-0 black__gradient"/>

        <div className = "absolute z-[0] w-[30%] h-[30%] right-0 bottom-0 black__gradient" /> 

    </div>


    </section>
  )
}

export default Hero