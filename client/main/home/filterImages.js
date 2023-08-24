import React from 'react';
import cachedDatabase from '../../utility/cachedDatabase';

export const filterByCategory = (category) => {
    return cachedDatabase.serverDataObject.filter(image => image.category === category);
};

export const filterImagesByCategory = (category) => {
    const filtered = filterByCategory(category);
    //set state with filtered images 
    setImages(filtered);
};
