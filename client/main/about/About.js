import React from 'react';
import { useState } from 'react';
import Navbar from '../../utility/Navbar'

const About = () => {

    return (
        <div className='d-flex flex-column'>
          <Navbar
            header='About'
            links= {[
             ['Home', '/home'],
             ['Create', '/create'],
             ['Profile', '/profile'],
             ['More', '/more'],
            ]}
          />
        </div>
    );
}

export default About;