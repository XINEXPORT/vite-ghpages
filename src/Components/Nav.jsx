import {Link} from 'react-router-dom'


export default function Nav() {
  return (
    <nav className = "w-full flex py-6 justify-between items-center navbar">
      <ul className = "list-none sm:flex hidden justify-end items-center flex-1">
        <li  >
        <Link to="/vite-ghpages">Home</Link>
        </li>
        <li>
        <Link to="in/topics">Topics</Link>
        </li>
        <li>
        <Link to="in/about">About</Link>
        </li>
        
      </ul>
    </nav>
  );
}