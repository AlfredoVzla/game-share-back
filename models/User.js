class User{
    constructor(userName, email, password, age, description){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.profilePicture = null;
        this.age = age;
        this.description = description;
    }
}
module.exports = User;