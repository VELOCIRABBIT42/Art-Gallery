import React from 'react';
import CardContainer from './components/CardContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Upload } from './components/Upload';
import { Login } from './components/Login';
import CardComponent from './components/CardComponent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import { Signup } from './components/Signup';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <div className='container'>
        <div className='row'>
          <div className="col-2"> */}
          <div className="d-flex">
          <Sidebar />
          {/* </div>
          <div className="col"> */}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<CardContainer />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/component' element={<CardComponent />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
          </Routes>
          </div>
          {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default App;
