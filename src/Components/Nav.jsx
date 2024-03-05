// import logo from '../../images/dm_white_logo.png';
import {Link} from 'react-router-dom'
import logo from '../images/TCClogo.svg'
export default function Nav() {
  return (
    <nav className="w-full flex items-center">

        <img src={logo} alt="dm logo" className='w-[180px]'/>

      <ul className='list-none flex w-full justify-evenly'>
        <li>
        <Link to="/vite-ghpages">Home</Link>
        </li>
        <li>
        <Link to="in/topics">Topics</Link>
        </li>
        <li>
        <Link to="in/about">About</Link>
        </li>
        <li>
        <Link to="in/contact">Contact</Link>
        </li>
      </ul>

    </nav >
  );
}