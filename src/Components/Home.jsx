import styles from '../styles';
import dayHero from '../images/dayHero.svg'

const Home = () =>{
  return (
    <section id = "home" className = {`${styles.paddingY} flex flex-col md:flex-row`}>
      
      <div className={`${styles.flexStart} ${styles.paddingX} flex-1 flex-col`}>

      <div className='flex flex-row justify-between items-center w-full text-tccred'>
            <h1 className='flex-1 ss:text-[64px] text-[52px] leading-[50px] tracking-wide'> A Dallas-based
              <h1 className='tracking-tighter'>web development</h1>
 
            </h1>

        </div>

        <h1 className='ss:text-[70px] text-[52px] text-tccred ss:leading-[65px] leading-[75px] w-full tracking-widest mb-0 font-semibold'> 
              Blog
            </h1>
            <h1 className=' ss:text-[50px] text-[52px] text-tccred ss:leading-[55px] leading-[75px]w-full tracking-tight'> 
              Starring
            </h1>

            <h1 className='flex-1 ss:text-[60px] text-[52px] leading-[50px] tracking-wide text-tccred'> Christine Hoang
              <h1 className='tracking-widest text-tccred'>& Joe Aguado</h1>
 
            </h1>

</div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={dayHero} alt='' className='w-[100%] h-[100%] relative z-[5]'/>

        <div className = "absolute z-[0] w-[20%] h-[20%] top-40 pink__gradient"/>
        <div className = "absolute z-[0] w-[40%] h-[30%] rounded-full right-5 yellow__gradient" />
        <div className = "absolute z-[0] w-[20%] h-[40%] right-20 bottom-20 orange__gradient" /> 

      </div>


      {/* <div id="Bio" className = "w-full flex flex-col justify-between items-center text-tccred">
        <div className = 'flex-1 ss:text-[64px] text-[52px] ss:leading-[100px] leading-[75px] tracking-widest'>A Dallas-based <br className='sm:block hidden' /> {" "}</div>
        <div className='text-[32px] md:text-[64px] tracking-wide leading-none'>Web Development </div> 
        <div className='text-[35px] md:text-[70px] tracking-widest leading-none'>Blog</div> 
        <div className='text-[20px] md:text-[40px] tracking-widest leading-none'>starring</div> 
        <div className='text-[38px] md:text-[78px] tracking leading-none'>Christine Hoang </div>
        <div className='text-[37px] md:text-[76px] tracking-widest leading-none'>& Joe Aguado</div>
      </div> */}

        {/* <div className={`flex-1 flex ${styles.flexCenter} relative`}>

          <img src = {dayHero} alt = "deserthero" className = "w-[100%] h-[100%] relative z-[5]"/>
        </div> */}

      {/* <div className = "absolute z-[0] w-[20%] h-[20%] top-40 pink__gradient"/>
      <div className = "absolute z-[0] w-[40%] h-[30%] rounded-full right-5 yellow__gradient" />
      <div className = "absolute z-[0] w-[20%] h-[40%] right-20 bottom-20 orange__gradient" /> */}
      



    </section>
  );
}

export default Home;