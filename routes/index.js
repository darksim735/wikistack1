var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wikistack' });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'About Us' });
});

module.exports = router;
