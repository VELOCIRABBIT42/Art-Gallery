import React from 'react';
import Navbar from '../../utility/Navbar'

const More = () => {

    return (
        <div className='d-flex flex-column'>
          <Navbar
            header='More'
            links= {[
             ['Home', '/home'],
             ['Create', '/create'],
             ['Profile', '/profile'],
             ['About', '/about'],
            ]}
          />
        </div>
    );
}

export default More;