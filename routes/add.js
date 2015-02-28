var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('addPage', { title: 'Add Page' });
});

router.post('/submit', function(req, res, next) {
  var models = require('../models/');

  // add defs of title body and url_name w body parser
  var title = req.body.title;
  var body = req.body.content;
  
  var url_name = fixedEncodeURIComponent(title);

  function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  var p = new models.Page({"title": title, "body": body, "url_name": url_name});
  p.save();
  res.redirect('/');
});

module.exports = router;
