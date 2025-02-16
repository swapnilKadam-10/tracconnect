
const Joi = require('joi');
const { signup } = require('../Controllers/AuthController');

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(40).required(),
    email : Joi.string().email(),
    phoneNo : Joi.string().length(10).pattern(/^[0-9]+$/).required(), // Added pattern to ensure numeric input
    password : Joi.string().min(8).max(16).required(), // Made password required
  });


  const { error } = schema.validate(req.body);
  if(error) {
    return res.status(400)
     .json({ message : "Bad Request", error: error.details[0].message }); // Adjusted error message format
  }
  next();
}

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    phoneNo : Joi.string().length(10).pattern(/^[0-9]+$/).required(), // Added pattern to ensure numeric input
    password : Joi.string().min(8).max(16).required(), // Made password required
  });


  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400)
        .json({ message: "Bad request", error })
}
  next();
}



module.exports = {
  signupValidation,
  loginValidation,
}
