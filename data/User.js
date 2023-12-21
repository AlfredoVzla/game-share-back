const database = require("../config/firebase");
const { getDatabase, ref, push, set} = require("firebase/database");
const cloudinary = require('../helper/images');
const user = require("../models/User");
require('dotenv').config();

class UserDao {
    constructor() {

    }

    async createUser(user) {
        try {
            const db = getDatabase();
            const collectionName = process.env.DATABASENAME;
            
            const newUserId = push(ref(db, collectionName)).key;
            user.userId = newUserId;

            const imagePath = "C:\\Users\\jvale\\Downloads\\social.jpg";
            
            // Utiliza await para esperar a que se resuelva la promesa de uploadImageToCloudinary
            const profilePictureUrl = await cloudinary.uploadImageToCloudinary(imagePath);

            // Asigna la URL de la imagen al objeto user
            user.profilePicture = profilePictureUrl;

            await set(ref(db, `${collectionName}/${newUserId}`), {
                userData: user
            });

            console.log(`New user created with ID: ${newUserId}`);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            // Aquí puedes manejar el error según tus necesidades
        }
    }
}

module.exports = UserDao;