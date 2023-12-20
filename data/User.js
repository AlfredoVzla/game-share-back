const database = require("../config/firebase");
const { getDatabase, ref, push, set} = require("firebase/database");

const user = require("../models/User");

class UserDao {
    constructor() {

    }

    async createUser(user) {
        const db = getDatabase();

        const newUserId = push(ref(db, 'Game-share')).key;

        user.userId = newUserId

        await set(ref(db, `Game-share/${newUserId}`), {
            userData: user
        });

        console.log(`New user created with ID: ${newUserId}`);
    }
}
