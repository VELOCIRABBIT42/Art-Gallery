import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetailsForm from '../login/UserDetailsForm'

const Signup = ( props ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getUsername = (event) => {
    setUsername(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const signup = async (username, password) => {
    try {
      const response = await fetch('/auth/signup', {
        method: 'post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      //Login on signup was never implemented but needs to be implemented
    } 
    catch (err) {
      console.log(err);
    }
  };

  return (
<UserDetailsForm 
      srcImg='https://media.istockphoto.com/id/916731506/vector/cover-your-eyes-with-both-hands.jpg?s=612x612&w=0&k=20&c=C6EANocmn8thIaLGEfvcy3gGsdgqkUlLcELGloEC1GQ='
      promp='Sign up'
      onSubmit={signup}
      >
         <p>
            Already have an account? <a href='#' onClick={()=> navigate('/')} >Log in</a>
          </p>
      </UserDetailsForm>
  );
}
export default Signup;