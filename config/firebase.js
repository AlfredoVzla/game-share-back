// Importa las funciones necesarias de Firebase
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  databaseURL: "https://game-share-f99fb-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

// Verifica si la base de datos está inicializada
const database = getDatabase(app);

module.exports = database;
