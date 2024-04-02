import { useLoaderData } from "react-router-dom";
import styles from '../styles';


export default function Post() {
  const {title, writer, date, content, content1, content2, content3, content4, content10} = useLoaderData();

  return (

    <div className={`prose ${styles.padding} pt-10`}>
      <h1 className="text-tccred">{title}</h1>
        <div className="">
      <h4 className="">Written by: {writer}</h4>  
      <h5>{date}</h5>
        <p className =  {``}>{content1}</p>
        <p className =  {``}>{content2}</p>
        <p className =  {``}>{content3}</p>
        <p className =  {``}>{content4}</p>
      </div>
    </div>
  );
}