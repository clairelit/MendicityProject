var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});

router.get('/whatismendicity', function(req, res, next) {
  res.render('whatismendicity');
});

router.get('/whatisthebookoftransmission', function(req, res, next) {
  res.render('whatisthebookoftransmission');
});

router.get('/searchpage', function(req, res, next) {
  res.render('searchpage');
});

router.get('/contactmendicity', function(req, res, next) {
  res.render('contactmendicity');
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});

module.exports = router;
