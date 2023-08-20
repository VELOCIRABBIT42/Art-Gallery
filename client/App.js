import React from 'react';
import CardContainer from './components/CardContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Upload } from './components/Upload';
import { Login } from './components/Login';
import CardComponent  from './components/CardComponent';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<CardContainer />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/component' element={ <CardComponent />} />
      </Routes>
    </>
  );
};

export default App;
