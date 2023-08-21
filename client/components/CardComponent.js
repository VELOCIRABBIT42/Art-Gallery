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
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <div className='card h-100 shadow'>
            <div className='d-flex flex-column justify-content align-items-center'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
                className='img-fluid card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>Mona Lisa</h5>
                <p className='card-text'>Artist name</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card h-100 shadow'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/330px-Great_Wave_off_Kanagawa2.jpg'
              className='img-fluid card-img-top'
            />
            <div className='card-body'>
              <h5 className='card-title'>Mona Lisa</h5>
              <p className='card-text'>Artist name</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card h-100 shadow'>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src='https://img.freepik.com/free-photo/abstract-eye-portrait-young-women-elegance-generated-by-ai_188544-9712.jpg'
              className='img-fluid card-img-top'
            />
            <div className='card-body'>
              <h5 className='card-title'>Mona Lisa</h5>
              <p className='card-text'>Artist name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CardComponent;
