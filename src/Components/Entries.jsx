import React from 'react'
import {Link, useLoaderData} from 'react-router-dom';
import styles from '../styles';

const Entries = ({blogData}) => {
    // const posts = useLoaderData()
    console.log(blogData)


    const displayBlogs = blogData.map((post) => {
        return <div key={post.id} className='max-w-[220px] m-4 items-center text-center'>
        <Link 
        to = {`in/blog/${post.id}`}
        className=''
        >
    <div className='flex flex-col w-[140px] sm:w-[200px]'>
      <img src={post.photo} alt='photo' className='' />
            <p className='sm:text-base font-bold'>{post.title} </p>        
            <p> {post.firstName} {post.lastName}</p> 
            <p className='text-sm sm:text-sm'>{post.date}</p>
    </div>
            </Link>
    </div>

      });
  return (
    <div className={`${styles.padding} flex flex-col items-center relative md:h-screen`} >
    <h1 className={`${styles.paddingY}  text-5xl font-rye bg-primary`}>Entries</h1>
      <div className={`relative flex flex-wrap bg-primary items-center justify-center`}>
        {displayBlogs}
      <div className = "absolute z-[0] w-[30%] h-[30%] right-0 bottom-10 black__gradient" /> 
    </div>
</div>
  )
}

export default Entries