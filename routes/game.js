const router = require('express').Router();

router.get('/highScore', (req, res) => {
  res.send(req.params.bookId)
})

router.post('/addScore', function (req, res) {
  res.send('POST request to the homepage')
})


module.exports = router;