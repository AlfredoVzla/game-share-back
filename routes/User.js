const {Router} = require("express");
const {createUser} = require("../controllers/User")
const { userExistsMiddleware } = require("../middleware/validator");

const router = Router();

router.post("/",userExistsMiddleware,createUser);


module.exports = router