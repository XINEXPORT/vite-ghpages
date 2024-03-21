import { useLoaderData } from "react-router-dom";
import styles from '../styles';


export default function Post() {
  const {title, content, content1, content2, content3, content4} = useLoaderData();

  return (
    <div className="text-tccred">
      <h1 className = {`${styles.heading1} flex-1 font-helvetica font-semibold ss:text-[30px] text-[30px] text-tccred ss:leading-[100px] leading-[75px]`}>{title}</h1>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content1}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content2}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content3}</p>
      <p className =  {`${styles.paragraph} ${styles.marginX} ${styles.marginY} max-w-[470px], mt-5 `}>{content4}</p>

    </div>
  );
}