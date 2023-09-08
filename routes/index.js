var express = require('express');
var router = express.Router();

//shows page with list of flights
router.get('/', function(req, res, next) {
  res.redirect('/flights')
})

module.exports = router;
