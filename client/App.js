import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CardContainer from './main/home/CardContainer';
import Upload from './main/create/Upload';
import Login from './main/login/Login';
import Signup  from './main/signup/Signup';
import CardComponent from './main/home/CardComponent';
import Navbar from './utility/Navbar';
import Sidebar from './utility/Sidebar';
import Product from './main/viewProduct/ProductComponent';

const App = () => {
  const location = useLocation()
  
  return (
    <>
      {location.pathname === '/' || location.pathname === '/signup' ? '' : <Navbar />}
      <div className="d-flex">
        {location.pathname === '/' || location.pathname === '/signup' ? '' : <Sidebar />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<CardContainer />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/component' element={<CardComponent />} />
          <Route path='/product/:title' element={<Product />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
