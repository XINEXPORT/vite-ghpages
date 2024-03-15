import React from 'react'
import test1 from '../images/desertassets/10.svg'
import test2 from '../images/desertassets/11.svg'
import test3 from '../images/desertassets/15.svg'
import test4 from '../images/desertassets/16.svg'

const BlogTest = () => {
  return (
<article className="prose md:prose-lg prose-stone prose-h4:underline">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <h4>Different Cheeses</h4>
  <ul>
    <li>Parmesan </li>
    <li>Cheddar </li>
    <li>Swiss</li>
    <li>Mozzarella</li>
  </ul>
<h4>Lorem Ipsum</h4>
  <p className='flex flex-col'>
  Massa vitae tortor condimentum lacinia quis vel. In ornare quam viverra orci sagittis. Tristique senectus et netus et malesuada fames ac turpis. Elit at imperdiet dui accumsan sit amet. 
    <div className='flex'>

  <img src={test1} alt='' className=' w-[200px]' />
  <img src={test2} alt='' className='w-[200px]' />
    </div>
  </p>
  <code>
{`
  const example = () => {
      console.log("Hello, Armadillos!");
`}
  </code>

  <h4> Flowers </h4>
  <p className='flex flex-col'>
  Massa vitae tortor condimentum lacinia quis vel. In ornare quam viverra orci sagittis. Tristique senectus et netus et malesuada fames ac turpis. Elit at imperdiet dui accumsan sit amet. 
    <div className='flex justify-center prose-img:rounded-full bg-blue-200'>

  <img src={test3} alt='' className='' />

    </div>
  </p>


</article>
  )
}

export default BlogTest