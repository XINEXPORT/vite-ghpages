import styles from '../styles';
import Hero6 from '../images/Hero6.png'
import blackskull from '../images/nightlogos/blackskull.png'


const Home = () =>{
  return (
    <section id = "home" className = {`sm:flex-col item-center justify-center md:flex-row flex-col items-center ${styles.paddingY}`}>
      

      <div className = " w-full flex flex-col justify-center text-left px-8">

 
      <div className = 'sm:text-[81px] leading-none'>A Dallas-based </div>
       <div className='sm:text-[64px] tracking-wide leading-none'>Web Development </div> 
       <div className='sm:text-[70px] tracking-widest leading-none'>Blog</div> 
       <div className='sm:text-[40px] tracking-widest leading-none'>starring</div> 
       <div className='sm:text-[78px] tracking leading-none'>Christine Hoang </div>
       <div className='sm:text-[76px] tracking-widest leading-none'>& Joe Aguado</div>


      </div>

      <img src = {Hero6} alt = "deserthero" className = "w-[100%] h-[100%] relative z-[5]"/>

      <div className = "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient">
        </div>
        <div className = "absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient">
        </div>
        <div className = "absolute z-[0] w-[20%] h-[40%] right-20 bottom-20 orange__gradient">
        </div>

    </section>
  );
}

export default Home;