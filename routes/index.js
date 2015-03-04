var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Page.find(function (err, pages) {
    if (err) throw err;
    res.render('index', { title: 'Wikistack', docs: pages});
  });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'About Us' });
});

module.exports = router;