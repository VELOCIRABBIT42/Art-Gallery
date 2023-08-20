import React from 'react';

const CardComponent = ({ image }) => {



  return (
    // <div className="card">
    //   <img src={image.url} alt={image.title} />
    //   <div className="card-body">
    //     <h5 className="card-title">{image.title}</h5>
    //     <p className="card-text">{image.description}</p>
    //   </div>
    // </div>
    <div className="card">
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg' />
    <div className="card-body">
      <h5 className="card-title">The Mona Lisa</h5>
      <p className="card-text"></p>
    </div>
  </div>

  );
};

export default CardComponent;
