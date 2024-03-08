import { useLoaderData } from "react-router-dom";
import styles from '../styles';


export default function Post() {
  const {title, content} = useLoaderData();

  return (
    <div className="h-screen">
      <h1 className = {`${styles.heading1} flex-1 font-helvetica font-semibold ss:text-[30px] text-[30px] text-black ss:leading-[100px] leading-[75px]`}>{title}</h1>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content}</p>
    </div>
  );
}