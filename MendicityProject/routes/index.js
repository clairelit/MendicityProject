var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoClient = require('mongodb').MongoClient;


// If I am running locally then use 'mongodb://localhost:27017/test' otherwise
// look for the environment variable
var url = process.env.CUSTOMCONNSTR_MongoDB || 'mongodb://dbuserclaire:litclonmel@ds064278.mlab.com:64278/MongoLab-f';


/* GET search page. */
router.get('/searchpage', function(req, res, next) {
    //var db = req.db;
  //  var collection = db.get('mendoPeopleList');
  //  collection.find({},{},function(e,docs){
    //    res.render('searchpage', {
      //      "searchpage" : docs
      //  });
  //  });
  res.render('searchpage');
});


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


router.get('/contactmendicity', function(req, res, next) {
  res.render('contactmendicity');
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});

module.exports = router;
