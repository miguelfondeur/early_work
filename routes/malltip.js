var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('malltip', { title: 'Malltip-Shoptip' });
});

module.exports = router;
