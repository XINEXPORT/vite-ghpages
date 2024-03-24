import {Outlet} from 'react-router-dom'
import Nav from './Components/Nav.jsx';
import styles from './styles';
import BlogTest from './Components/BlogTest.jsx';
// import MarkdownRenderer from './Components/MarkdownRenderer.jsx';



export default function App() {
  return (
    <div className= {`w-full bg-primary`}>
      
      <div className = {`  ${styles.flexCenter} bg-primary`} >
        
        <div className={`${styles.boxWidth} bg-primary`}>
          <Nav />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} bg-primary`}>
          <Outlet 
          className=''
          />

          {/* <BlogTest /> */}


        </div>
      </div>
    </div>

  );
}