import React from "react";

const UsernameField = ({setUsername}) => (
  <div className='form-floating'>
    <input
      className='form-control mb-2'
      onChange={(e)=>{setUsername(e.target.value)}}
      type='text'
      placeholder='Username'
      id='username'
    />
    <label for="username">Username</label>
  </div>
)

export default UsernameField;