import './Home.css';
import styles from '../../styles';

export default function Home() {
  return (
    <div className = "flex flex-row justify-between items-center w-full">
      <h1 className = "flex-1 font-helvetica font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">Texas Coding Club</h1>
      <h2 className =  {`${styles.paragraph} max-w-[470px], mt-5`}>Head over to the topic browser to see all the latest posts!</h2>
    </div>
  );
}