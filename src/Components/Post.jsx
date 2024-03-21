import { useLoaderData } from "react-router-dom";
import styles from '../styles';


export default function Post() {
  const {title, writer, date, content, content1, content2, content3, content4, content10} = useLoaderData();

  return (
    <div className={`prose ${styles.padding} pt-10`}>

      {/* <h1 className = {`${styles.heading1} flex-1 font-helvetica font-semibold ss:text-[30px] text-[30px] text-black ss:leading-[100px] leading-[75px]`}>{title}</h1>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px] mt-5 `}>{content}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px] mt-5 `}>{content1}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px] mt-5 `}>{content2}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px] mt-5 `}>{content3}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px] mt-5 `}>{content4}</p> */}

      <h1 className="text-tccred">{title}</h1>
      <div className="">
      <h4 className="">Written by: {writer}</h4>  
      <h5>{date}</h5>
      </div>

      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>



    </div>
  );
}