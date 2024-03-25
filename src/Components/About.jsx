import styles from '../styles';


const About = ({aboutData}) => {

console.log(aboutData)

  return (
    
    <section className={`ss:bg-primary flex flex-col md:flex-row justify-center items-center text-center`}>
      {aboutData.map(person => (
                <div key={person.id} className='flex flex-col items-center p-4 max-w-[600px]'>
                <img src={person.img} alt={person.name} className='w-[160px] sm:w-[200px] rounded-full' />
                <h1 className='font-semibold mb-2 ss:text-[30px] text-[30px]'>{person.name}</h1>
                <p className={`${styles.paragraph} ,`}>{person.bio}</p>
              </div>

      ))}
    </section>

  )
}

export default About