import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cachedDatabase from '../../utility/cachedDatabase';
import Navbar from '../../utility/Navbar';

const ProductComponent = () => {
  const [imageData, setImageData] = useState({});

  const location = useLocation();
  const title = location.pathname.slice(9).replaceAll('%20', ' ');

  useEffect(() => {
    //Access data from store
    try {
      setImageData( cachedDatabase.serverDataObject.filter((obj) => obj.title === title )[0] );
    }
    catch (e){
      console.error('Error fetching images:', e);
    }
  }, []);

  return (
    <div className='d-flex flex-column'>
      <Navbar
        header='Art Viewer'
        links= {[
          ['Home', '/home'],
          ['Create', '/create'],
          ['About', '/about'],
          ['Profile', '/profile'],
          ['More', '/more'],
          ['Sign Out', '/'],
        ]}/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src={imageData.url} className='img-fluid' />
          </div>
          <div className='col'>
            <h1>{imageData.title}</h1>
            <p className='artist'>Artist: {imageData.artist}</p>
            <p className='description'>{imageData.description}</p>
            <button className='btn btn-sm btn-outline-danger'>Contact</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductComponent;
