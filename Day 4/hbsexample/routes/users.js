var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users.hbs', { title: 'Express', msg : 'Users Example' });
});

module.exports = router;
