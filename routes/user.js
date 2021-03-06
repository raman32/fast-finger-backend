const router = require('express').Router();

const { sendAuthToken } = require('../controllers/sendUserToken');
// Import MiddleWares
const {loginValidation, registerValidation, jwtValidation} = require('../middlewares/userValidation');

// Import Models
const {signUp, signIn } = require('../models/User');



router.post('/register',registerValidation,signUp,signIn,sendAuthToken);
router.post('/login',loginValidation,signIn,sendAuthToken);

router.post('/edit',jwtValidation, function (req, res) {
  res.send("Hi!"+req.user._name);
})


module.exports = router;