import {Outlet} from 'react-router-dom'
import Nav from './Components/Nav.jsx';
import styles from './styles';

export default function App() {
  return (
    <div className= {`flex flex-col w-full overflow-hidden bg-primary`}>
      <div className = {``} >
      <Nav />
      </div>
      <Outlet />
    </div>

  );
}