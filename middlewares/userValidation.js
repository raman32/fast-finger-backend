const Joi = require("joi");
const jwt = require("jsonwebtoken");
function loginValidation(req, res, next) {
  const loginSchema = Joi.object({
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(6).required(),
  });
  const error = loginSchema.validate(req.body).error;
  if (error) {
    res.status(422).json({
      status: "error",
      message: error.details[0].message,
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
  const error = registerSchema.validate(req.body).error;
  if (error) {
    res.status(422).json({
      status: "error",
      message: error.details[0].message,
      data: req.body,
    });
  } else {
    next();
  }
}
function jwtValidation(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({status:"error", message:"Acces Denied"});
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
  } catch (err) {
    res.status(400).json({status:"error", message:"Invalid Token"});
  }
  next();
}
module.exports = { loginValidation, registerValidation, jwtValidation };
