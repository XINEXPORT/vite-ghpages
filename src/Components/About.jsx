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
      <p>The origin of the Texas Coding Club started as a collaboration project between web development students, Joe Aguado and Christine Hoang. After completing their education in Dallas Texas, they attended a local study group and started a Github project in an attempt to strengthen their technical and team-working skills. </p>
      <p>Joe and Christine would like to introduce the Texas Coding Club website as an open source project to the local development community. Their goal is to allow other Texas-based developers to contribute content to the blog, code for the website and to also create a supportive website and community for local developers. </p>
      <p>If you’d like to see this project take on a different look, have an added feature or help it get a functioning back-end, let us know! The codebase is on a Github repository that we can share. The intent for this project is to serve as a sandbox for us wanting to try out new skills or technologies as we learn them and see it to full production.</p>
      <p>We would like to say a big thanks to our study group and peers on helping us spring-board our ideas and helping us publish our site onto the web.</p>
        <h2>The stack we used to build this project:</h2>
        <ul>
          <li>Vite</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>TailWind CSS</li>
          <li>Dreamhost</li>
        </ul>  
        <h2>Work Management Tools:</h2>
        <ul>
          <li>Figma</li>
          <li>Canva</li>
          <li>Google Docs</li>
        </ul>

    <div className={`${styles.padding} ss:bg-primary flex flex-col md:flex-row justify-center items-center text-center`}>

      {aboutData.map((person) => (
                <div key={person.id} className='flex flex-col items-center max-w-[600px] m-8'>


                
                <img src={person.img} alt={person.name} className='w-[120px] sm:w-[160px] rounded-full ring-2 p-1 border-black border-2 ring-tccred' />

                <div>
                <h1 className='font-semibold ss:text-[30px] text-[24px] font-wellfleet pt-4'>{person.name}</h1>
                <div className='flex p-4 items-center justify-center md:hidden'>
            {person.links.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.icon && <link.icon 
                size={35}
                className='mx-4 text-tccred'
                />} 
              </a>
            ))}
          </div>
                </div>





                <p className={`${styles.paragraph} text-[21px] prose`}>{person.bio}</p>

              
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