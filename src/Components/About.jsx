import styles from '../styles';


const About = ({aboutData}) => {

console.log(aboutData)

  return (
    
    <section className={`bg-primary flex flex-col sm:flex-row justify-center items-center text-center mb-10`}>
  

      {aboutData.map(person => (
                <div key={person.id} className='flex flex-col items-center p-4 max-w-[470px]'>
                <img src={person.img} alt={person.name} className='w-[160px] sm:w-[200px] rounded-full' />
                <h1 className='font-semibold mb-2 ss:text-[30px] text-[30px]'>{person.name}</h1>
                <p className={`${styles.paragraph} ,`}>{person.bio}</p>
              </div>

      ))}


    </section>

  )
}

export default About