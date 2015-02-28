var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
db.Page.find(function (err, pages) {
  if (err) throw err;
  pages.forEach(function (page) {
    router.get('/'+page.url_name, function(req, res, next) {
      res.render('show', { doc: page});
    });
  })
});

module.exports = router;
