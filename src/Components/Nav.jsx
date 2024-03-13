// import logo from '../../images/dm_white_logo.png';
import {Link} from 'react-router-dom'
import logo from '../images/TCClogo.svg'
import styles from '../styles';

export default function Nav() {
  return (
    <nav className={`z-10 w-full flex items-center bg-primary text-tccred `}>

        <img src={logo} alt="dm logo" className='w-[240px] cursor-pointer'/>

      <ul className=' list-none flex w-full justify-end'>
        <li className=''>
        <Link to="/vite-ghpages">Home</Link>
        </li>
        <li className='pl-10'>
        <Link to="in/topics">Topics</Link>
        </li>
        <li className='pl-10'>
        <Link to="in/about">About</Link>
        </li>
        <li className='pl-10'>
        <Link to="in/contact">Contact</Link>
        </li>
      </ul>

    </nav >
  );
}