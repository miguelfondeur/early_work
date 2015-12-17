var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shestf', { title: 'She\'s The First' });
});

module.exports = router;
