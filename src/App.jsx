import {Outlet} from 'react-router-dom'
import Nav from './Components/Nav.jsx';
import styles from './styles';
import BlogTest from './Components/BlogTest.jsx';

export default function App() {
  return (
    <div className= {`w-full h-screen bg-primary`}>
      
      <div className = {`${styles.paddingX} ${styles.flexCenter}`} >
        
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />

          {/* <BlogTest /> */}
        </div>
      </div>
    </div>

  );
}