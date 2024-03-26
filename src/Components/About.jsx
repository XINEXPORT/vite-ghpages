import React from 'react'
import styles from '../styles';
import BioLinks from './BioLinks';


const IconLink =({ url, icon: Icon}) => {
  console.log('received individual link:', url, Icon)
  return (
      <a href={url} target="_blank" rel="noopener noreferrer" className=''>
        <Icon style={{ fontSize: '35px', color: 'white' }} />
          
      </a>
  )
}

const IconList = ({links}) => {
  console.log("received person links:", links)

  if (!links || links.length ===0 ){
    return null
  }
  return (
      <div className='w-full flex justify-evenly'>
          {links.map((link, index) => {
              console.log("processing individual link:", link)
              return (
                  <IconLink key={index} url={link.url} icon={link.icon} 
                  />
              )
          })}
      </div>
  )
}
const About = ({aboutData}) => {

console.log(aboutData)

  return (
    <section className={` flex flex-col items-center`}>
      <h1 className={`font-rye text-[40px] tracking-widest`}>About</h1>
    <div className={`${styles.padding} ss:bg-primary flex flex-col md:flex-row justify-center items-center text-center`}>

      {aboutData.map((person) => (
                <div key={person.id} className='flex flex-col items-center max-w-[600px] m-8 py-10'>


                  
                <img src={person.img} alt={person.name} className='w-[180px] rounded-full ring-2 p-1 border-black border-2 ring-tccred' />


                <h1 className='font-semibold ss:text-[30px] text-[30px] font-wellfleet'>{person.name}</h1>




                <p className={`${styles.paragraph} text-[18px] font-stint`}>{person.bio}</p>
              
                <div className='flex p-4'>
            {person.links.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.icon && <link.icon 
                size={40}
                className='mx-4'
                />} 
              </a>
            ))}
          </div>




              </div>

      ))}
    </div>


</section>
  )
}

export default About