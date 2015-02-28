var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/:url', function (req, res) {
  var urlName = req.params.url;
  db.Page.findOne({'url_name': urlName}, function (err, page) {
    console.log(urlName);
    res.render('show', {doc: page});
  })
})

// previous slow implementation
// db.Page.find(function (err, pages) {
//   if (err) throw err;
//   pages.forEach(function (page) {
//     router.get('/:url_name', )
//       function (req, res) {
//         console.log(page);
//         res.render('show', { doc: page});
//       }
//     );
//   })
// });

module.exports = router;
