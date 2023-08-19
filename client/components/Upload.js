import React from 'react';
import { useState } from 'react';


export function Upload() {
const [image, setImage] = useState();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');




const getImg = (event) => {
  setImage(event.target.value);
  console.log(event.target.value)
}

const getTitle = (event) => {
  setTitle(event.target.value);
  console.log(event.target.value)
}

const getDescription = (event) => {
  setDescription(event.target.value);
  console.log(event.target.value)
}

const upload = async () => {
  try {
    await fetch('localhost:3000/gallery/upload', {
    method: 'POST',
    body: JSON.stringify({image: image, title: title, description: description})
    })
  } catch (err) {
    console.log(err)
  }

}


  return (

    <div>
       <input type="file" onChange={getImg} accept="image/gif, image/jpeg, image/png" />
       <input type="text" onChange={getTitle} placeholder="Title of work"/>
       <input type="text" onChange={getDescription} placeholder="Description"/>
       <button onClick={upload}>upload</button>
    </div>
  )

}