const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

const storage = multer.memoryStorage() //to store files in memory as Buffers
const upload = multer({storage: storage}) // instance of Multer with a storage



app.use(express.json())

app.get('/', (req, res) => {
    res.send('Quinn & Sharmarke, let\'s goooooooo!')
})

//telling the multer middleware to expect a single file with a field image
// app.post('/upload', upload.single('image'), async (req, res)=> {
//   console.log('we are here')
//   //console.log('req',req)
//     try {
//       if (!req.file) { // file not uploaded
//           return res.status(400).send('File not uploaded.')
//       }

      


//      const response = await uploadToImgur(req.file);
//      console.log('response', response)

//       if (response.success) {
//         const imgurImgUrl = response.data.link; 
//         res.status(200).send(`The image has been uploaded to Imgur ${imgurImgUrl}`)
//       }else {
//         res.status(500).send('Failed to upload image to Imgur')
//       }
        
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Server Error dude')
        
//     }

    

// });

app.post('/forwardToImgur', async (req, res) => {
  const clientId = '8d48fe7c9d3ef77'

 



  

  try {
    // Get the image data from the incoming request body
    console.log('corps', req.file)


    if (typeof req.body.image !== 'undefined') {
      const imageBuffer = Buffer.from(req.body.image, 'base64');
      // Rest of the code
    } else {
      res.status(400).json({ error: 'Invalid image data' });
    }


    

 

    // Set up headers for forwarding the request
    const headers = {
      Authorization: `Client-ID ${clientId}`,
    };

    // Forward the image data to Imgur API
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      body: imageBuffer,
      headers: headers,
    });

    // Get the response data from Imgur API
    console.log('Imgur API Response:', response.status, response.headers);
    const responseData = await response.json();
    console.log('Imgur API Response Body:', responseData);

    // Forward Imgur API response back to the original client
    res.json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


async function uploadToImgur(image) {
    const clientId = '8d48fe7c9d3ef77'

    //sending the image in HTTP POST request

    const formData = new FormData(); //in-built javascript Object to send files in HTTP
   // formData.append('image', image.buffer); //key image used by the server to identify the uploaded file. Express is exepecting this key => upload.single('image')
   console.log('type image',typeof image)
   formData.append('image', image)
    //console.log('formadata", formData)
    console.log('formdata', formData);

    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      body: image,//formData,
      headers: {
        Authorization: `Client-ID ${clientId}`,
      //...formData.getHeaders(), // giving content-type and header's properties
    },
  });

  return await response.json();




    

}



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})