const router = require('express').Router();

// Import MiddleWares
const {loginValidation, registerValidation, jwtValidation} = require('../middlewares/userValidation');

// Import Models
const {signUp, signIn } = require('../models/User');

router.post('/register',registerValidation,signUp,signIn,function (req, res) {
  res.json({
    "auth-token": req.header.token,
    "created-on": req.header.token_created_on,
    "token-expiry": req.header.token_validity,
  })
})

router.post('/login',loginValidation,signIn, function (req, res) {
  res.json({
    "auth-token": req.header.token,
    "created-on": req.header.token_created_on,
    "token-expiry": req.header.token_validity,
  })
})

router.post('/edit',jwtValidation, function (req, res) {
  res.send("Hi!"+req.user._name);
})


module.exports = router;