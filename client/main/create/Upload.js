import React from 'react';
import { useState } from 'react';
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const Upload = ( props )=>{
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState('');

  const getImg = (event) => {
    setImage(event.target.files[0]);
  };

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getDescription = (event) => {
    setDescription(event.target.value);
  };

  const getArtist = (event) => {
    setArtist(event.target.value);
  };

  const upload = async (event) => {
    event.preventDefault();
    if (image === null) return;

    const imageRef = ref(storage, `images/${image.name + v4()}`);
    try {
      const response = await uploadBytes(imageRef, image);
      const url = await getDownloadURL(response.ref);
      
      await fetch('/upload', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, title, description, artist, url, userId: 2 }),
      });

      const inputs = document.querySelectorAll('input');
      inputs[1].value = '';
      inputs[2].value = '';
      inputs[3].value = '';
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container d-flex align-items-center mt-5'>
      <div className='row'>
        <div className="col">
          <img src='https://cdn.dribbble.com/users/932465/screenshots/17128020/media/d2c9cf6dc135ca0d29832f504efe654c.png?resize=400x0' />
        </div>
        <div className='col'>
          <form>
            <h3>Submit your work</h3>
            <input
              className='form-control mb-3'
              type='file'
              onChange={getImg}
              accept='image/gif, image/jpeg, image/png'
            />
            <input
            className="form-control mb-3"
              type='text'
              onChange={getTitle}
              placeholder='Title of work'
            />
            <input
              className="form-control mb-3"
              type='text'
              onChange={getArtist}
              placeholder='Artist'
            />
            <input
              className="form-control mb-3"
              type='text'
              onChange={getDescription}
              placeholder='Description'
            />
            <div className='form-check mb-3'>
            <label className="form-check-label" for='original'>Original work?</label>
            <input type="checkbox" className="form-check-input" id='original'/>
            </div>
            <button className="btn btn-danger w-100" onClick={upload}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;