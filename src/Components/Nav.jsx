// import logo from '../../images/dm_white_logo.png';
import {Link} from 'react-router-dom'
import logo from '../images/TCClogo.svg'
import styles from '../styles';

export default function Nav() {
  return (
    <nav className={`z-10 w-full flex items-center bg-primary text-tccred overflow-hidden`}>

          <Link to="/vite-ghpages">
          <img src={logo} alt="dm logo" className='w-[180px] sm:w-[220px] cursor-pointer'/>
          </Link>

    
        <div className='w-full h-full flex flex-col'>
          <ul className='h-full list-none flex flex-col items-end sm:flex-row w-full justify-end font-wellfleet text-[22px] md:text-[28px] xs:tracking-wider'>
            <li className='mb-4'>
            <Link to="/vite-ghpages">Home</Link>
            </li>
            <li className='mb-4 xs:pl-10 md:pl-20'>
            <Link to="in/topics">Archives</Link>
            </li>
            <li className='mb-4 xs:pl-10 md:pl-20'>
            <Link to="in/about">About</Link>
            </li>
            <li className='mb-4 xs:pl-10 md:pl-20'>
            <Link to="in/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </nav >
  );
}