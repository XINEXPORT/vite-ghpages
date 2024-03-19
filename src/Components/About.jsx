import userData from '../data/user_data.json'
import styles from '../styles';
import photo from '../images/profileimg/joeaguado2.jpeg'
import { AboutData } from '../constants';

const About = () => {

  return (
    <section className={`bg-primary flex flex-col sm:flex-row justify-center items-center text-center`}>
  
      {AboutData.map((person) => (
        <div key={person.id} className='flex flex-col items-center p-4 max-w-[470px]'>
          <img src={person.img} alt={person.name} className='w-[160px] sm:w-[200px] rounded-full' />
          <h1 className='font-semibold mb-2 ss:text-[30px] text-[30px]'>{person.name}</h1>
          <p className={`${styles.paragraph} ,`}>{person.bio}</p>
        </div>
      ))}
    </section>

// const users = useLoaderData();

// const displayBio = users.map((user)=>{
//   return <div key={user.id} className = "">
//           <br/>
//           <div className='flex flex-col items-center'>
//           <h1 className = "font-semibold flex justify-center mb-5 ss:text-[30px] text-[30px] ">{user.name}</h1>
//           <img className = "flex justify-center mb-5 w-[310px] rounded-full " src = {user.img}/>
//           <p className =  {`${styles.paragraph} max-w-[470px], mt-5`}>{user.bio}</p>
//           </div>
//           </div>
// })





//   return (
//     <div className='bg-primary flex flex-col justify-center items-center'>
//       <img src={photo} alt='' className='w-[200px]' />
//       <h1 className =  {`${styles.heading1} max-w-[480px], flex justify-center pb-4`}>About</h1>
//       <div className = {`ss:${styles.flexStart} md:${styles.flexCenter} font-helvetica font-normal ss:text-[15px] text-[30px] text-black ss:leading-[40px] leading-[40px]`}>{displayBio}</div>
    
//     <div>
// {AboutData.map((person)=> (
//   <div key={person.id}>

//   </div>
// ))}
//     </div>
//     </div>
  )
}

export default About