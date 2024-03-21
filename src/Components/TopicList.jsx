import {Link, useLoaderData} from 'react-router-dom';
import styles from '../styles';


export default function TopicList() {
  const posts = useLoaderData();

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>
      <Link to = {`in/post/${post.id}
      `}
      className='no-underline'
      >
<div className='flex flex-col'>
        <p className='font-bold'>{post.title} </p>        
        <p className='pl-2'> By: {post.writer} <span className='font-thin pl-1'>{post.date}</span></p>
</div>
        </Link>

    </li>;
  });
  return (

    // <div className = {`flex sm:flex flex-col md:flex w-screen h-screen ${styles.paddingY}`}>
    //   <h1 className =  {`${styles.paragraph} max-w-[470px], mt-5 font-semibold`}>Blog Post Topics...</h1>
    //   <ul className = {`${styles.paragraph} flex-1 font-helvetica font-normal ss:text-[30px] text-[50px] text-black ss:leading-[100px] leading-[75px]`}>{displayTopics}</ul>

<div className={`${styles.padding} pt-10 prose`} >
<h1 className='text-tccred'>Blog Entries</h1>
<ol>
  {displayTopics}
</ol>

</div>


    // </div>

  );
}