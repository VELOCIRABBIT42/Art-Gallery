import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './main/home/Home';
import Create from './main/create/Create';
import Login from './main/login/Login';
import Signup  from './main/signup/Signup';
import About from './main/about/About';
import Profile from './main/profile/Profile';
import More from './main/more/More';
// import CardComponent from './main/home/CardComponent';
import Product from './main/viewProduct/ProductComponent';

const App = () => {  
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/more' element={<More />} />
      <Route path='/product/:title' element={<Product />} />
    </Routes>
  );
};

export default App;