import{Link, Outlet, useNavigate} from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav/Nav.jsx';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}