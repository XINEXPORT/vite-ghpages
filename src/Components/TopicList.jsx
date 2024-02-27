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
    <div >
      <h1 className =  {`${styles.paragraph} max-w-[470px], mt-5`}>Latest Blog Posts...</h1>
      <ul className =  {`${styles.paragraph} max-w-[470px], mt-5`}>{displayTopics}</ul>
    </div>
  );
}