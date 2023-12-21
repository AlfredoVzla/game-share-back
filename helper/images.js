require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL);

const uploadImageToCloudinary = (imagePath)=>{
    return new Promise((resolve,reject)=>{
        const uploadOptions = {
           folder: 'profilepicture'
        }
        cloudinary.uploader.upload(imagePath,uploadOptions,(error,result)=>{
            if(error){
                console.error('Error al subir la imagen: ',error);
                reject(error);
            }else{
                console.log('Imagen subida exitosamente a cloudinary: ',result);
                const url = result.url;
                resolve(url);
            }
        });
    });
};

module.exports = {uploadImageToCloudinary};