// import logo from '../../images/dm_white_logo.png';

import {Link , useLocation} from 'react-router-dom'
import { useState } from 'react';
import logo from '../images/TCCLogo.svg'

import styles from '../styles';

export default function Nav() {

const [toggle, setToggle] = useState(false);



  return (
    <nav className={`z-10 w-full flex items-center bg-primary text-tccred overflow-hidden ${styles.paddingX} pt-2`}>

          <Link to="/vite-ghpages">
          <img src={logo} alt="dm logo" className='w-[240px] cursor-pointer'/>
          </Link>

    
        <div className='w-full h-full flex flex-col'>
          <ul className='h-full list-none flex flex-col items-end sm:flex-row w-full justify-end font-wellfleet text-[22px] sm:text-[28px] xs:tracking-wider'>


            <li className='mb-4'>
            <Link to="/vite-ghpages">Home</Link>
            </li>


          <li className={`mb-4 xs:pl-10 lg:pl-20`}>
            <Link to="in/topics">Topics</Link>
          </li>
          <li className={`mb-4 xs:pl-10 lg:pl-20`}>
            <Link to="in/about">About</Link>
          </li>
          <li className={`mb-4 xs:pl-10 lg:pl-20`}>
            <Link to="in/contact">Contact</Link>
          </li>
          </ul>
        </div>
    </nav >
  );
}