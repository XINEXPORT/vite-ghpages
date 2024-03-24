import React from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from '../styles'

const Blog = () => {

const {title, writer, date, content, firstName, lastName, content1, content2, content3, content4, photo} = useLoaderData()

return (
<section className={`prose ${styles.padding} pt-10 `}>



<h1 className="text-tccred">{title}</h1>
<div className="">
<h4 className="">Written by: {firstName} {lastName}</h4>  
<h5 className=''>Date: {date}</h5>
{/* <div className='flex justify-center'>
<img src={photo} alt='photo' className='max-w-[250px]' />
</div> */}
<p className =  {``}>{content}</p>

    <p className='font-lobster text-tccred text-[24px] flex justify-end pr-20'>-{firstName}</p>

<div className='flex flex-col items-center'>
<img src={photo} alt='photo' className='max-w-[240px] flex justify-center' />

</div>
</div>


</section>
  )
}

export default Blog