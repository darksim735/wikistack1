var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/:url', function (req, res) {
  var urlName = encodeURIComponent(req.params.url).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  // url not matching (spaces)
  db.Page.findOne({'url_name': urlName}, function (err, page) {
    // console.log(urlName);
    res.render('show', {doc: page});
  })
})

router.get('/:url/editPage', function(req, res, next) {
  var urlName = encodeURIComponent(req.params.url).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  // url not matching (spaces)
  // could use add and pass property edit: true
  // if editing - x code, else y code then endif
  db.Page.findOne({'url_name': urlName}, function (err, page) {
    res.render('editPage', {doc: page});
  })
});

router.post('/:url/editPage/submit', function(req, res, next) {
  // if doc has _id 
  var title = req.body.title;
  var body = req.body.content;
  var urlName = encodeURIComponent(title).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  // res render id as url
  // when post /page/:id - res render urlname
  db.Page.findOneAndUpdate({'title': title}, {body: body, url_name: urlName}, {multi: true, upsert: true}, function (err, doc) {
    res.redirect('/wiki/'+urlName);
  })

});

router.post('/:url/deletePage', function (req, res) {
  // if url was the id 
  db.Page.findByIdAndRemove(req.params.id);
  res.redirect('/');
})

module.exports = router;

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