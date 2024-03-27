import styles from '../styles';

const About = ({aboutData}) => {

console.log(aboutData)

  return (
    <section className={` flex flex-col items-center`}>
      <h1 className={`font-rye text-[40px] tracking-widest`}>About</h1>
    <div className={`${styles.padding} ss:bg-primary flex flex-col md:flex-row justify-center items-center text-center`}>

      {aboutData.map(person => (
                <div key={person.id} className='flex flex-col items-center p-4 max-w-[600px]'>
                <img src={person.img} alt={person.name} className='w-[180px] rounded-full ring-2 p-1 border-black border-2 ring-tccred' />
                <h1 className='font-semibold mb-2 ss:text-[30px] text-[30px] font-wellfleet'>{person.name}</h1>
                <p className={`${styles.paragraph} text-[18px] font-stint`}>{person.bio}</p>
              </div>

      ))}
    </div>
</section>
  )
}

export default About