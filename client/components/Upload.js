import React from 'react';
import { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'


export function Upload() {
const [image, setImage] = useState();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [url, setUrl] = useState('');




const getImg = (event) => {
  setImage(event.target.files[0]);
  console.log('local image',event.target.files[0])
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
  if (image === null) return;
  const imageRef = ref(storage,`images/${image.name + v4()}`);
 
  try{
    const response = await uploadBytes(imageRef, image)
    console.log('Image uploaded');
    const url = await getDownloadURL(response.ref);
    setUrl(url);
  }catch (err) {
    console.log('Error while uploading image to firebase:', err)
  }




 // endpoit /upload on port 3000
// Object expected on server side
//  const imgObj = {
//   userId,
//   title,
//   description,
//   url
//  }

  try {
    await fetch('localhost:3000/upload', {
    method: 'POST',
    body: JSON.stringify({image: image, title: title, description: description, url: url, userId: 2})
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




