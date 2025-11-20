const ImageKit = require('@imagekit/nodejs') ;

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  
});

const uploadFile = async (fileBuffer, fileName) => {
  try {
    const response = await client.files.upload({ 
      file: fileBuffer.toString("base64"),
      fileName: fileName,
      folder : "Image-Caption"
    });
    return response;
  } catch (error) {
    console.error('ImageKit upload error:', error);
    throw error;
  }
};

module.exports = uploadFile