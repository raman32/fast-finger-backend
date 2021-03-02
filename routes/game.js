const router = require('express').Router();

//Import middlewares
const {jwtValidation} = require('../middlewares/userValidation')

//Import models
const {getHighScores, addScore} =  require('../models/Game');
router.get('/highScore',getHighScores)
router.post('/addScore',jwtValidation,addScore)


module.exports = router;