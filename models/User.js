class User{
    constructor(userId,userName, email, password, profilePicture, age, description){
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.age = age;
        this.description = description;
    }
}
module.exports = User;