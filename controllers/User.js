const userDAO = require("../data/User");
const bycriptjs = require('bcryptjs');
const user = require("../models/User");

async function createUser(req,res){
    const{
        userName,
        email,
        password,
        profilePicture,
        age,
        description
    }=req.body;

    const salt = bycriptjs.genSaltSync();

    const cryptPassword = bycriptjs.hashSync(password,salt);

    const usuario = new userDAO();

    const users = new user(userName,email,cryptPassword,age,description);

    usuario.createUser(users);

    res.json(usuario);

}

module.exports = {createUser}
