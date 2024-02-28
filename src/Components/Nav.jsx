// import logo from '../../images/dm_white_logo.png';
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
      {/* <div>
        <img src={logo} alt="dm logo" />
      </div> */}
      <ul>
        <li>
        <Link to="/vite-ghpages">Home</Link>
        </li>
        <li>
        <Link to="in/topics">Topics</Link>
        </li>
      </ul>
    </div>
  );
}