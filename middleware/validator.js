const { userExistsByUsername } = require('../helper/validators-db'); 

async function userExistsMiddleware(req, res, next) {
    try {
        await userExistsByUsername(req.body.username);

        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {userExistsMiddleware};
