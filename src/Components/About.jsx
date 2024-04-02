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
    <section className={` flex flex-col items-center sm:h-screen`}>
      <h1 className={`font-rye text-[40px] tracking-widest`}>About</h1>
    <div className={`${styles.padding} ss:bg-primary flex flex-col md:flex-row justify-center items-center text-center`}>

      {aboutData.map((person) => (
                <div key={person.id} className='flex flex-col items-center max-w-[600px] m-8'>


                
                <img src={person.img} alt={person.name} className='w-[180px] rounded-full ring-2 p-1 border-black border-2 ring-tccred' />

                <div>
                <h1 className='font-semibold ss:text-[30px] text-[30px] font-wellfleet pt-4'>{person.name}</h1>
                <div className='flex p-4 items-center justify-center md:hidden'>
            {person.links.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.icon && <link.icon 
                size={40}
                className='mx-4 text-tccred'
                />} 
              </a>
            ))}
          </div>
                </div>



                <p className={`${styles.paragraph} text-[21px] font-helvetica`}>{person.bio}</p>
              
                <div className='flex p-4 hidden md:flex'>
            {person.links.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.icon && <link.icon 
                size={40}
                className='mx-4 text-tccred hover:text-amber-950 duration-100'
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