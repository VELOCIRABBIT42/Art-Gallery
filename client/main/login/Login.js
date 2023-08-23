import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetailsForm from './UserDetailsForm';

const Login = (props)=>{
  const navigate = useNavigate();

  const validate = async (username, password) => {
    try {
      const response = await fetch('/auth/hashedLogin', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        navigate('/home');
      }
      else {
        alert('Log in failed');
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <UserDetailsForm 
      srcImg='https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg'
      promp='Sign into your account'
      onSubmit={validate}
      >
        <p>Don't have an account? <a href="#" onClick={()=> navigate('/signup')}>Sign up</a></p>
      </UserDetailsForm>
  );
};

export default Login;