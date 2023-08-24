import React from 'react';
import cachedDatabase from '../../utility/cachedDatabase';

const filterByCategory = (category, images) => {
    return images.filter(image => image.filter === category);
};

export const filterImagesByCategory = (category, setImages) => {
    const filtered = filterByCategory(category, cachedDatabase.serverDataObject);
    //set state with filtered images 
    setImages(filtered);
};