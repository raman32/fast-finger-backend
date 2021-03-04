const router = require('express').Router();

//Import middlewares
const {jwtValidation} = require('../middlewares/userValidation')

//Import models
const {getHighScores, addScore, getHighScoreAsync} =  require('../models/Game');

router.get('/highScore',async (req, res)=>{
    const highScore  = await getHighScoreAsync();
    res.json(highScore);
})
router.post('/addScore',jwtValidation,addScore)


module.exports = router;