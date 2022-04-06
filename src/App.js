import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import React from 'react';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import Dishes from "./components/Dishes";
import Dish from './components/Dish';
import Header from './components/Header';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="dishes" element={<Dishes/>} />
          <Route path="dishes/:id" element={<Dish/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
    <Header/>
    </BrowserRouter>
    </>
  )
  
}

export default App;
