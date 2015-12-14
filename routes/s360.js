var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('s360', { title: 'Simply360' });
});

module.exports = router;
