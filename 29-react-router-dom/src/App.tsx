import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './views/home/home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Dashboard } from './views/dashboard/dashboard';
import { Navbar } from './components/navbar/Navbar';
import { BlogPage } from './views/blog-page/BlogPage';
import { Blog } from './views/blog/Blog';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <div className="container">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:idBlog" element={<Blog/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
