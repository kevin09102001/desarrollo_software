var express = require('express');
var router = express.Router();

// Respond to a PUT request to the /user route
router.put('/user', function(req, res, next) {
  res.send('Got a PUT request at /user');
});

// Respond to a DELETE request to the /user route
router.delete('/user', function(req, res, next) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
