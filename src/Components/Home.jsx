import styles from '../styles';
import Hero6 from '../images/Hero6.png'
import blackskull from '../images/nightlogos/blackskull.png'


const Home = () =>{
  return (
    <section id = "home" className = {`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <img src = {blackskull} alt = "blackskull" className = "w-[200px] h-[200px] "/>


      <div className = "flex flex-row justify-between items-center w-full">

      <h1 className = "flex-1 font-helvetica font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">Texas Coding Club</h1>
      <h2 className =  {`${styles.paragraph} max-w-[470px], mt-5`}>A Dallas-based Web Development Blog starring Christine Hoang & Joe Aguado</h2>
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