import {useLoaderData} from 'react-router-dom';
import styles from '../styles';

const About = () => {
const users = useLoaderData();

const displayBio = users.map((user)=>{
  return <div key={user.id} className = "mb-10">
          <br/>
          <h1 className = "font-semibold flex justify-center mb-5 ss:text-[30px] text-[30px] ">{user.name}</h1>
          <img className = "relative mb-5 w-[310px] rounded-full" src = {user.img}/>
          <p>{user.bio}</p>
          </div>
})

  return (
    <div className='bg-primary flex flex-col justify-center items-center'>
      <h1 className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center`}>About</h1>
      <div className = "flex-1 font-helvetica font-normal ss:text-[15px] text-[30px] text-black ss:leading-[40px] leading-[40px]">{displayBio}</div>
    </div>
  )
}

export default About