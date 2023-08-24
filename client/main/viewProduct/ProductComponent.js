import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cachedDatabase from '../../utility/cachedDatabase';

const ProductComponent = () => {
  const [images, setImages] = useState({});

  const location = useLocation();
  let title = location.pathname.slice(9).replaceAll('%20', ' ');

  useEffect(() => {
    //Access data from store
    try {
      setImages( cachedDatabase.serverDataObject.filter((obj) => obj.title === title )[0] );
    }
    catch (e){
      console.error('Error fetching images:', e);
    }
  }, []);

  return (
    <>
      {'title' in images ? (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={images.url} className='img-fluid' />
            </div>
            <div className='col'>
              <h1>{images.title}</h1>
              <p className='artist'>Artist: {images.artist}</p>
              <p className='description'>{images.description}</p>
              <button className='btn btn-sm btn-outline-danger'>Contact</button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ProductComponent;
