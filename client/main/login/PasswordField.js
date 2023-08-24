import React from "react";

const PasswordField = ({setPassword}) => (
  <div className='form-floating'>
    <input
      className='form-control mb-3'
      onChange={(e)=>{ setPassword(e.target.value) }}
      type='password'
      placeholder='Password'
      id='password'
    />
    <label for="password">Password</label>
  </div>
)

export default PasswordField;