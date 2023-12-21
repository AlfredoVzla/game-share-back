// Importa las funciones necesarias de Firebase
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  databaseURL: process.env.DATABASEURL
};

const app = initializeApp(firebaseConfig);

// Verifica si la base de datos está inicializada
const database = getDatabase(app);

module.exports = database;
