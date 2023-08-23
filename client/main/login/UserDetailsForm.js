import React from "react";
import { useState } from 'react';
import PasswordField from './PasswordField';
import UsernameField from './UsernameField';

const UserDetailsForm = ({srcImg, promp, onSubmit, children})=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
  <div className='d-flex border border-2 rounded-3 shadow m-5'>
    <img
        src={srcImg}
        style={{ width: 300 }}
        className='img-fluid border rounded-3 m-2'
      />
    <div className="d-flex flex-grow-1 flex-column p-3">
      <h3>The Art Gallery</h3>
      <h6>{promp}</h6>
      <UsernameField setUsername={setUsername}/>
      <PasswordField setPassword={setPassword}/>
      <button onClick={()=>onSubmit(username, password)} className='btn btn-danger w-100 mb-2'>Login</button>
      {children}
      {/* <p>Don't have an account? <a href="#" onClick={()=> navigate('/signup')}>Sign up</a></p> */}
    </div>
  </div>)
};

export default UserDetailsForm;