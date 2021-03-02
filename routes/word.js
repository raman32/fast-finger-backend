const router = require('express').Router();

router.get('/:difficulty', (req, res) => {
  res.send(req.params.difficulty)
})


module.exports = router;