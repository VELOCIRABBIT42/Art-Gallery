import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const uploadFile = async ({
  image,
  title,
  description,
  artist,
})=>{
  if (!image) {
    alert('Please Select A file');
    return;
  };

  const imageRef = ref(storage, `images/${image.name + v4()}`);
  try {
    const response = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(response.ref);
    
    await fetch('/upload', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ image, title, description, artist, url, userId: 2 }),
    });
  }
  catch (err) {
    console.log(err);
  }
};

export default uploadFile;