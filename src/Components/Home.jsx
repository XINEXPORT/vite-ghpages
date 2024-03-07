import styles from '../styles';
import Hero6 from '../images/Hero6.png'
import blackskull from '../images/nightlogos/blackskull.png'


const Home = () =>{
  return (
    <section id = "home" className = {``}>
      
      <div className='flex flex-col sm:flex-row justify-center items-center'>

      <div id="Bio" className = " flex flex-col justify-center text-left text-tccred">
        <div className = 'text-[40px] md:text-[81px] leading-none'>A Dallas-based </div>
        <div className='text-[32px] md:text-[64px] tracking-wide leading-none'>Web Development </div> 
        <div className='text-[35px] md:text-[70px] tracking-widest leading-none'>Blog</div> 
        <div className='text-[20px] md:text-[40px] tracking-widest leading-none'>starring</div> 
        <div className='text-[38px] md:text-[78px] tracking leading-none'>Christine Hoang </div>
        <div className='text-[37px] md:text-[76px] tracking-widest leading-none'>& Joe Aguado</div>
      </div>

      <img src = {Hero6} alt = "deserthero" className = " relative z-[5]"/>

      <div className = "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient">
      </div> 
      <div className = "absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient">
      </div>
      <div className = "absolute z-[0] w-[20%] h-[40%] right-20 bottom-20 orange__gradient">
      </div>
      </div>
    </section>
  );
}

export default Home;