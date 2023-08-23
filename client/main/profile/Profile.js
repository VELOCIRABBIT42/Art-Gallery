import React from 'react';
import { useState } from 'react';
import Navbar from '../../utility/Navbar'

const Profile = () => {

    return (
        <div className='d-flex flex-column'>
          <Navbar
            header='Profile'
            links= {[
             ['Home', '/home'],
             ['Create', '/create'],
             ['About', '/about'],
             ['More', '/more'],
            ]}
          />
        </div>
    );
}

export default Profile;