import React from 'react';
import { useState } from 'react';
import InputField from './InputField';
import uploadFile from './uploadFile';
import Navbar from '../../utility/Navbar';
import TypeDropdown from './TypeDropdown';

const Create = ( props )=>{
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [type, setType] = useState('Select Type');

  const upload = async (event) => {
    if (type === 'Select Type') return;
    uploadFile({ image, title, description, artist, type });

    setTitle('');
    setDescription('');
    setArtist('');
    setType('Select Type');
  };

  return (
    <div className='d-flex flex-column'>
      <Navbar
        header='Create'
        links= {[
         ['Home', '/home'],
         ['About', '/about'],
         ['Profile', '/profile'],
         ['More', '/more'],
        ]}
      />
      <div className='container d-flex align-items-center justify-content-center mt-5 h-100'>
        <div className="col">
          <img src='https://cdn.dribbble.com/users/932465/screenshots/17128020/media/d2c9cf6dc135ca0d29832f504efe654c.png?resize=400x0' />
        </div>
        <div className='col'>
          <h3>Submit your work</h3>
          <InputField setterFunction={setImage} type={'file'}/>
          <InputField setterFunction={setTitle} placeholder='Title of work'/>
          <InputField setterFunction={setArtist} placeholder='Artist'/>
          <InputField setterFunction={setDescription} placeholder='Description'/>
          <TypeDropdown setterFunction={ setType } value={type} options={['Sculptures', 'Paintings', 'Virtual', 'Modern', 'Lanscapes']}/>
          <div className='form-check mb-3'>
            <label className="form-check-label" for='original'>Original work?</label>
            <input type="checkbox" className="form-check-input"/>
          </div>
          <button className="btn btn-danger w-100" onClick={upload}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Create;