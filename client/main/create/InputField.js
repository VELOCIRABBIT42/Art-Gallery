import React from 'react';

const InputField = ( { setterFunction, placeholder, type } )=>{
  if (!type) type = 'text';
  
  return type==='text'? (
    <input
      className="form-control mb-3"
      type='text'
      onChange={(e) => {
        setterFunction(e.target.value);
      }}
      placeholder= {placeholder}
    />
  ):
  (<input
      className="form-control mb-3"
      type='file'
      onChange={(e) => {
        setterFunction(e.target.files[0]);
      }}
      accept='image/gif, image/jpeg, image/png'
    />)
};

export default InputField;