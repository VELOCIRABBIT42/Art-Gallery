import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../utility/Navbar';
import Sidebar from '../../utility/Sidebar';

const Home = (props) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/product/${title}`);
  };

  const loadImages = async ()=>{
    try {
      const response = await fetch('/gallery') // Replace with the API endpoint pertaining to PostgreSQL
      response.body = await response.body.json();
      if (!Array.isArray(response.body)) return;
  
      setImages(response.body);
    }
    catch (e) {
      console.error('Error fetching images:', e);
    }
  }

  useEffect(() => {
    loadImages();
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
        ]}
      />
      <div className='d-flex'>
        <Sidebar
          title='Filter'
          elementData={[
            ['Sculptures', ()=>{}],
            ['Paintings', ()=>{}],
            ['Virtual', ()=>{}],
            ['Modern', ()=>{}],
            ['Lanscapes', ()=>{}],
            ['Events', ()=>{}],
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