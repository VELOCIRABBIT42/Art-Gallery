import React from 'react';
import { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const validate = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'post',
        body: JSON.stringify({ username: username, password: password }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center min-vh-100'>
        <div className='row border border-2 rounded-3 shadow'>
          <div className='col'>
          <img
            src='https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg'
            style={{ width: 400 }}
            className='img-fluid border rounded-3 m-2'
          />
          </div>
          <div className="col p-3 align-items-center">
          <h3 className="mb-3">The Art Gallery</h3>
          <h6>Sign into your account</h6>
          <div className='form-floating'>
          <input
            className='form-control mb-2'
            onChange={getUsername}
            type='text'
            placeholder='Username'
            id='username'
          />
          <label for="username">Username</label>
          </div>
          <div className='form-floating'>
          <input
            className='form-control mb-3'
            onChange={getPassword}
            type='password'
            placeholder='Password'
            id='password'
          />
          <label for="password">Password</label>
          </div>
          <button className='btn btn-danger w-100 mb-2'>Login</button>
          <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
