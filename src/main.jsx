import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import TopicList from './Components/TopicList.jsx';
import Post from './Components/Post.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import postData from './data/post_data.json';
import userData from './data/user_data.json';
import ErrorPage from './Components/ErrorPage.jsx';
import Hero from './Components/Hero.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(

  <Route 
  path = "vite-ghpages/" 
  element={<App />}
  errorElement={<ErrorPage />}
  >

    <Route 
    index element={
    // <Home/>
    <Hero />
  }
    />

    <Route
    path = "in/topics"
    element={<TopicList/>}
    loader={()=> postData}/>

<Route
    path = "in/about"
    element={<About/>}
    loader={()=> userData}/>

<Route
    path = "in/contact"
    element={<Contact/>}
    loader={()=> userData}/>

    <Route
    path = "in/topics/in/post/:id"
    element={<Post/>}
    loader={({params})=>{
      const post = postData.find((item)=>item.id === +params.id)
      if (post){
        return post;
      }else{
        return {title: 'Post Not Found'};
      }
    }}
    />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);