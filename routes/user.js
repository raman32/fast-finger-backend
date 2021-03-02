const router = require('express').Router();

// Import MiddleWares

router.post('/register', function (req, res) {
  res.send('POST request to the homepage')
})

router.post('/login', function (req, res) {
  res.send('POST request to the homepage')
})

router.post('/edit', function (req, res) {
  res.send('POST request to the homepage')
})


module.exports = router;