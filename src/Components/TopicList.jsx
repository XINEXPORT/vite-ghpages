import {Link, useLoaderData} from 'react-router-dom';
import styles from '../styles';


export default function TopicList() {
  const posts = useLoaderData();

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>
      <Link to = {`in/post/${post.id}`}>{post.title}</Link>
    </li>;
  });
  return (
    <div className = {`flex sm:flex flex-col md:flex w-screen h-screen ${styles.paddingY}`}>
      <h1 className =  {`${styles.paragraph} max-w-[470px], mt-5 font-semibold`}>Latest Blog Posts...</h1>
      <ul className = {`${styles.paragraph} flex-1 font-helvetica font-normal ss:text-[30px] text-[50px] text-black ss:leading-[100px] leading-[75px]`}>{displayTopics}</ul>
    </div>
  );
}