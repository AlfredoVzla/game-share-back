const database = require("../config/firebase");
const { getDatabase, ref, push, set} = require("firebase/database");
const user = require("../models/User");
require('dotenv').config();

class UserDao {
    constructor() {

    }

    async createUser(user) {
        const db = getDatabase();

        const collectionName = process.env.DATABASENAME

        const newUserId = push(ref(db, collectionName)).key;

        user.userId = newUserId

        await set(ref(db, `${collectionName}/${newUserId}`), {
            userData: user
        });

        console.log(`New user created with ID: ${newUserId}`);
    }
}

module.exports = UserDao;