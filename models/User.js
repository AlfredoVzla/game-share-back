class User{
    constructor(userName, email, password, profilePicture, age, description){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.age = age;
        this.description = description;
    }
}
module.exports = User;