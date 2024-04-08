import React from 'react'
import {Link, useLoaderData} from 'react-router-dom';
import styles from '../styles';

const Entries = ({blogData}) => {
    // const posts = useLoaderData()
    console.log(blogData)


    const displayBlogs = blogData.map((post) => {
        return <div key={post.id} className=''>
        <Link 
        to = {`in/blog/${post.id}`}
        className=''
        >
    <div className='w-[150px] sm:w-[200px] flex flex-col'>
      <img src={post.photo} alt='photo' className='w-full' />
            <p className='font-bold text-[20px] leading-none'>{post.title} </p>        
            <p className='text-[16px] sm:text-[18px] leading-none pt-2'> {post.firstName} {post.lastName}</p> 
            <p className='text-[14px] sm:text-[16px] leading-none pt-1'>{post.date}</p>
    </div>
            </Link>
    </div>

      });
  return (
    <section className={`${styles.padding} flex flex-col items-center`} >
    <h1 className={`${styles.paddingY} text-5xl font-rye`}>Entries</h1>
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-20`}>
        {displayBlogs}
      {/* <div className = "absolute z-[0] w-[30%] h-[30%] right-0 bottom-10 black__gradient" />  */}
    </div>
</section>
  )
}

export default Entries