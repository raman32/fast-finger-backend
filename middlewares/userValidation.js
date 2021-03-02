const Joi = require("@hapi/joi");
const jwt = require('jsonwebtoken');
function loginValidation(req, res, next) {
  const loginSchema = Joi.object({
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(6).required(),
  });
  const valid = Joi.validate(req.body, loginSchema).error === null;
  if (!valid) {
    res.status(422).json({
      status: "error",
      message: "Invalid request data",
      data: req.body,
    });
  } else {
    next();
  }
}
function registerValidation(req, res, next) {
  const registerSchema = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(6).required(),
  });
  const valid = Joi.validate(req.body, registerSchema).error === null;
  if (!valid) {
    res.status(422).json({
      status: "error",
      message: "Invalid request data",
      data: req.body,
    });
  } else {
    next();
  }
}
function jwtValidation(req,res,next) {
  next();
}
module.exports = { loginValidation, registerValidation, jwtValidation };
