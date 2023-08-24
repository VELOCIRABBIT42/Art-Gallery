import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetailsForm from '../login/UserDetailsForm'

const Signup = (props) => {
  const navigate = useNavigate();

  const signup = async (username, password) => {
    try {
      const response = await fetch('/art/auth/signup', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) alert('Successful');
      else alert('Unsuccessful');
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
      buttonPrompt='Sign Up'
    >
      <p>
        Already have an account? <a href='#' onClick={()=> navigate('/')} >Log in</a>
      </p>
    </UserDetailsForm>
  );
};
export default Signup;
