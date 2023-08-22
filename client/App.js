import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import { Upload } from './components/Upload';
import { Login } from './components/Login';
import { Signup }  from './components/Signup';
import CardComponent from './components/CardComponent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Product from './components/ProductComponent';

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
