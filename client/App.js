import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './main/home/Home';
import Create from './main/create/Create';
import Login from './main/login/Login';
import Signup  from './main/signup/Signup';
import About from './main/about/About';
import Profile from './main/profile/Profile';
import More from './main/more/More';
import Product from './main/viewProduct/ProductComponent';

const cookieParser = ()=>{
  const result = {};
  let documentCookies = document.cookie;
  documentCookies = documentCookies.split(';');
  documentCookies = documentCookies.map(el=>el.split('='));

  for (const cookie of documentCookies){
    result[cookie[0]] = result[cookie[1]];
  }

  return result;
}

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    const cookies = cookieParser();

    if (!cookies.jwt && (location.pathname !== '/signup' || location.pathname !== '/')){
      navigate('/');
    }
  },[]);

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