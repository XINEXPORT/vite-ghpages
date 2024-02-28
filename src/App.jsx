import {Outlet} from 'react-router-dom'
import Nav from './Components/Nav.jsx';
import styles from './styles';

export default function App() {
  return (
    <div className='flex flex-col'>

    <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className = {`${styles.boxWidth}`} >
      <Nav />
      </div>
      <Outlet />
    </div>
    </div>
  );
}