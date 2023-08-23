import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';

const CardContainer = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/product/${title}`);
  };

  useEffect(async () => {
    try {
      const response = await axios.get('/gallery'); // Replace with the API endpoint pertaining to PostgreSQL
      setImages(response.data);
    } catch (e) {
      console.error('Error fetching images:', error);
    }
  }, []);

  return (
    <div className='container'>
      <div className='row gy-3'>
        {images.map((image) => (
          <CardComponent key={image.id} image={image} click={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
