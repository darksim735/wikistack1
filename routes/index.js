var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wikistack' });
});

router.get('/addPage', function(req, res, next) {
  res.render('addPage', { title: 'Add Page' });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'About Us' });
});

router.get('/nav', function(req, res, next) {
  res.render('nav', { title: 'About Us' });
});

module.exports = router;
