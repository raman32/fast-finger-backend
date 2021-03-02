const { getRandomWords } = require('../models/Word');

const router = require('express').Router();

router.get('/:difficulty', (req, res) => {
  switch(req.params.difficulty){
    case "easy" : {
      getRandomWords("easy",(results)=>res.json(results));
      break;
    }
    case "medium" :{
      getRandomWords("medium",(results)=>res.json(results));
      break;
    }
    case "hard" :{
      getRandomWords("hard",(results)=>res.json(results));
      break;
    }
    default: {
      getRandomWords("easy",(results)=>res.json(results));
    }
  }
})


module.exports = router;