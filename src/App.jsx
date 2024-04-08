import {Outlet} from 'react-router-dom'
import Nav from './Components/Nav.jsx';
import styles from './styles';
import BlogTest from './Components/BlogTest.jsx';
// import MarkdownRenderer from './Components/MarkdownRenderer.jsx';



export default function App() {
  return (
    <div className= {`w-full h-full bg-primary`}>
      
      <div className = {`${styles.flexCenter} `} >
        
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet 
          className=''
          />

          {/* <BlogTest /> */}


        </div>
      </div>
    </div>

  );
}