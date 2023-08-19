import React from 'react';
import { useState } from 'react';


export function Upload() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');




  return (

    <div>
       <input type="file" accept="image/gif, image/jpeg, image/png" />
       <input type="text" />
       <input type="text" />
    </div>
  )

}