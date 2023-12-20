require('dotenv').config();
const firebase = require("./config/firebase");
const userDAO = require("./data/User");
const user = require("./models/User");

const user1 = new user('usuarioEjemplo2','usuario@example.com','contraseña123','ruta/a/la/foto.jpg',25,'¡Hola! Soy un usuario de ejemplo.');

const userDao1 = new userDAO.UserDao();

userDao1.createUser(user1);





