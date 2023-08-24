import React from 'react';
import cachedDatabase from '../../utility/cachedDatabase';

export const filterByCategory = (category, images) => {
    return images.filter(image => image.category === category);
};

