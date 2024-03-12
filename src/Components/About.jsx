import userData from '../data/user_data.json'
import styles from '../styles';
import { useState } from 'react';

const About = () => {

const displayBio = userData.map((user)=>{
  return <div key={user.id} className = "">
          <br/>
          <div className='flex flex-col items-center'>
          <h1 className = "font-semibold flex justify-center mb-5 ss:text-[30px] text-[30px] ">{user.name}</h1>
          <img className = "flex justify-center mb-5 w-[310px] rounded-full" src = {user.img}/>
          <p className =  {`${styles.paragraph} max-w-[470px], mt-5`}>{user.bio}</p>
          </div>
          </div>
})

  return (
    <div className='bg-primary flex flex-col justify-center items-center'>
      <h1 className =  {`${styles.heading1} max-w-[480px], flex justify-center pb-4`}>About</h1>
      <div className = {`ss:${styles.flexStart} md:${styles.flexCenter} font-helvetica font-normal ss:text-[15px] text-[30px] text-black ss:leading-[40px] leading-[40px]`}>{displayBio}</div>
    </div>
  )
}

export default About