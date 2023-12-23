const userDAO = require("../data/User")

async function userExistsByUsername(user){
    const users = new userDAO();

    const userByUserName = await users.getUserByUserName(user);

    if(userByUserName){
        throw new Error("Nombre de usuario ya registrado");
    }
}

module.exports = {userExistsByUsername};