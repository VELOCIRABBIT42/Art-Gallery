import React from 'react';
import { useState } from 'react';
import InputField from './InputField';
import uploadFile from './uploadFile';
import Navbar from '../../utility/Navbar';
import TypeDropdown from './TypeDropdown';

const Create = (props) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');
  const [type, setType] = useState('Select Type');

  const upload = async (event) => {
    if (type === 'Select Type') return;
    await uploadFile({ image, title, description, artist, type });
    
    setImage();
    setTitle('');
    setDescription('');
    setArtist('');
    setType('Select Type');
  };

  return (
    <div className='d-flex flex-column'>
      <Navbar
        header='Create'
<<<<<<< HEAD
        links= {[
         ['Home', '/home'],
         ['About', '/about'],
         ['Profile', '/profile'],
         ['More', '/more'],
         ['Sign Out', '/'],
=======
        links={[
          ['Home', '/home'],
          ['About', '/about'],
          ['Profile', '/profile'],
          ['More', '/more'],
>>>>>>> dev
        ]}
      />
      <div className='container d-flex align-items-center justify-content-center mt-5 h-100'>
        <div className='col'>
          <img src='https://cdn.dribbble.com/users/932465/screenshots/17128020/media/d2c9cf6dc135ca0d29832f504efe654c.png?resize=400x0' />
        </div>
        <div className='col'>
          <h3>Submit your work</h3>
<<<<<<< HEAD
          <InputField setterFunction={setImage} type={'file'}/>
          <InputField setterFunction={setTitle} placeholder='Title of work'/>
          <InputField setterFunction={setArtist} placeholder='Artist'/>
          <InputField setterFunction={setDescription} placeholder='Description'/>
          <div className='d-flex mt-1'>
            <TypeDropdown setterFunction={ setType } value={type} options={['Sculptures', 'Paintings', 'Virtual', 'Modern', 'Lanscapes']}/>
            <button className="btn btn-danger w-100 ms-2" onClick={upload}>Submit</button>
          </div>
=======
          <InputField setterFunction={setImage} type={'file'} />
          <InputField setterFunction={setTitle} placeholder='Title of work' />
          <InputField setterFunction={setArtist} placeholder='Artist' />
          <InputField
            setterFunction={setDescription}
            placeholder='Description'
          />
          <TypeDropdown
            setterFunction={setType}
            value={type}
            options={[
              'Sculptures',
              'Paintings',
              'Virtual',
              'Modern',
              'Landscapes',
            ]}
          />
          <div className='form-check mb-3'>
            <label className='form-check-label' for='original'>
              Original work?
            </label>
            <input type='checkbox' className='form-check-input' />
          </div>
          <button className='btn btn-danger w-100' onClick={upload}>
            Submit
          </button>
>>>>>>> dev
        </div>
      </div>
    </div>
  );
};

export default Create;
