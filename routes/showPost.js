var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/:url', function (req, res) {
  var urlName = encodeURIComponent(req.params.url).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  // url not matching (spaces)
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
