const express = require("express");
const router = express.Router();
const authenticationRouter = require('../controllers/authenticationController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup',authMiddleware.authMiddleware,authenticationRouter.signup)

router.post('/login',authMiddleware.authMiddleware,authenticationRouter.login)


module.exports = router;