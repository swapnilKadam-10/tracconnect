const router = require('express').Router();
const { signup, login } = require('../Controllers/AuthController.js')
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation.js')


router.post('/login', loginValidation, login)

router.post('/signup',signupValidation, signup)


module.exports = router;