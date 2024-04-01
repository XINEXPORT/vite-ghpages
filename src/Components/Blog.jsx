import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import styles from '../styles'

const Blog = () => {

const {title, writer, date, content, firstName, lastName, content1, content2, content3, content4, photo} = useLoaderData()

return (
<section className={`prose ${styles.padding} pt-10 `}>


<div className=''>
    <div className="font-wellfleet">
      <h1 className="">{title}</h1>
      <h4 className="">Written by: <span className='normal-case'>{firstName} {lastName}</span></h4>  
      <h5 className=''>Date: {date}</h5>
    </div>
<p className =  {``}>{content}</p>



     <Link to='/vite-ghpages/in/about' className='no-underline'><p className='font-lobster hover:text-tccred text-[24px] flex justify-end pr-20 no-underline'>-{firstName}</p>
   </Link>

<div className='flex flex-col items-center'>
<img src={photo} alt='photo' className='max-w-[240px] flex justify-center' />

</div>
</div>


</section>
  )
}

export default Blog