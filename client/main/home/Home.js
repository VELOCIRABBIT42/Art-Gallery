import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../utility/Navbar';
import Sidebar from '../../utility/Sidebar';
import cachedDatabase from '../../utility/cachedDatabase';
import { filterImagesByCategory } from './filterImages';

const Home = (props) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/product/${title}`);
  };
  
  useEffect(() => {
    cachedDatabase.callbackFunctions.push(setImages);
    cachedDatabase.loadServerValues();
  }, []);


  return (
    <div className='d-flex flex-column'>
      <Navbar
        header='Home'
        links= {[
          ['Create', '/create'],
          ['About', '/about'],
          ['Profile', '/profile'],
          ['More', '/more'],
          ['Sign Out', '/'],
        ]}
      />
      <div className='d-flex'>
        <Sidebar
          title='Filter'
          elementData={[
            ['None', ()=> setImages(cachedDatabase.serverDataObject)],
            ['Sculptures', ()=> filterImagesByCategory('Sculptures', setImages)],
            ['Paintings', ()=> filterImagesByCategory('Paintings', setImages)],
            ['Virtual', ()=> filterImagesByCategory('Virtual', setImages)],
            ['Modern', ()=> filterImagesByCategory('Modern', setImages)],
            ['Landscapes', ()=> filterImagesByCategory('Landscapes', setImages)],
          ]}
        />
        <div className='container'>
          <div className='row gy-3'>
            {images.map((image) => (
              <CardComponent key={image.id} image={image} click={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;