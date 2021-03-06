 function sendAuthToken(req, res) {
    res.json({
      "status": "success",
      "auth-token": req.header.token,
      "created-on": req.header.token_created_on,
      "token-expiry": req.header.token_validity,
      "name":req.header.userName,
    })
  }
  module.exports = {sendAuthToken}