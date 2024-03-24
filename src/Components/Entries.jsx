import React from 'react'
import {Link, useLoaderData} from 'react-router-dom';
import styles from '../styles';

const Entries = ({blogData}) => {
    // const posts = useLoaderData()
    console.log(blogData)
    // console.log(posts)

    const displayBlogs = blogData.map((post) => {
        return <div key={post.id} className='max-w-[180px] p-4 items-center text-center'>
        
        <Link 
        to = {`in/blog/${post.id}`}
        className=''
          >
    <div className='flex flex-col '>
      <img src={post.photo} alt='photo' className='' />
            <p className=' sm:text-base font-bold '>{post.title} </p>        
            <p className=''> 
            {post.firstName} {post.lastName}</p> 
            <p className='text-sm sm:text-sm'>{post.date}</p>

    </div>
            </Link>
    </div>

      });
  return (
<div className={`${styles.padding} flex flex-col items-center`} >
<h1 className={`${styles.paddingY}  text-5xl font-rye`}>Entries</h1>
<div className={`relative flex flex-wrap`}>
  {displayBlogs}

        <div className = "absolute z-[0] w-[50%] h-[50%] right-0 -bottom-10 black__gradient" /> 
</div>

</div>
  )
}

export default Entries