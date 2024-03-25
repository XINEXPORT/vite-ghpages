import {Link , useLocation} from 'react-router-dom'
import { useState } from 'react';
import styles from '../styles';
import logoBlack from '../images/nightlogos/blackskull.png'
import altLogo from '../images/altLogo.svg'
export default function Nav() {

const [toggle, setToggle] = useState(false);


  return (
    <nav className={`z-[100] w-full flex items-center bg-primary overflow-hidden p-2 sm:px-8`}>

          <Link to="/vite-ghpages">
          <img src={altLogo} alt="dm logo" className='w-[240px] cursor-pointer relative z-20'/>
          <div className = "absolute z-[0] w-[20%] h-[20%] top-0 left-0 black__gradient" /> 
          </Link>

    
        <div className='w-full h-full flex flex-col text-black'>
          <ul className='h-full list-none flex flex-col items-end sm:flex-row w-full justify-end font-wellfleet text-[22px] sm:text-[28px] xs:tracking-wider '>


            <li className='mb-4 hover:text-tccred'>
            <Link to="/vite-ghpages">Home</Link>
            </li>


            <li className='mb-4 xs:pl-10 lg:pl-20 hover:text-tccred'>
            <Link to="in/entries">Entries</Link>
            </li>

{/* 
          <li className={`mb-4 xs:pl-10 lg:pl-20`}>
            <Link to="in/topics">Topics</Link>
          </li> */}
          <li className={`mb-4 xs:pl-10 lg:pl-20 hover:text-tccred`}>
            <Link to="in/about">About</Link>
          </li>
          <li className={`mb-4 xs:pl-10 lg:pl-20 hover:text-tccred`}>
            <Link to="in/contact">Contact</Link>
          </li>
          </ul>
        </div>
    </nav >
  );
}