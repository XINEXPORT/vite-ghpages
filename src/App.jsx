import {Outlet} from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Nav from './Components/Nav/Nav.jsx';
import styles from './styles';

export default function App() {
  return (
    <div className='flex flex-col'>

    <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className = {`${styles.boxWidth}`} >
      <Nav />
      </div>

      <div className = {`bg-primary ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <Home/>
        </div>
      </div>

      <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <About/>
        </div>
      </div>

      <Outlet />
    </div>
    </div>
  );
}