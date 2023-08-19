import React from 'react';

const CardComponent = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} />
      <div className="card-body">
        <h5 className="card-title">{image.title}</h5>
        <p className="card-text">{image.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
