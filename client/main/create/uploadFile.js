import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const uploadFile = async ({
  image,
  title,
  description,
  artist,
  type
})=>{
  if (!image) {
    alert('Please Select A file');
    return;
  };

  const imageRef = ref(storage, `images/${image.name + v4()}`);
  try {
    const response = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(response.ref);
    
    const createResponse = await fetch('/art/gallery/addimage', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, artist, url, filter: type }),
    });
    if (createResponse.ok){
      alert('Image Created');
    }
    else{
      alert('Image Failed to create');
    }
  }
  catch (err) {
    console.log(err);
    alert('Image Failed to create');
  }
};

export default uploadFile;