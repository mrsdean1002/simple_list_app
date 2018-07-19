// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');
const Book = require('../models/file.model')
// All handlers below...

  
  router.get('/', function(req, res, next) {
    var rng = Math.floor(Math.random()*quotes.length);
    console.log(`rng`, rng);
   res.json(rng)
  });
  
  router.get('/deanquotes.html', function(req, res, next) {
    var rng = Math.floor(Math.random()*quotes.length);
    console.log(`rng`, rng);
   res.json(quotes[rng])
  });

  router.get('/booklist', function(req, res) {
    Book.find({}, function(err, allbooks){
      res.json(allbooks);
    });
  })


  /**
 * C - reate
 */
router.post('/file', function(req, res, next) {
  res.end('Create a new file');
});
/**
 * R - ead
 */
router.get('/file/:fileId', function(req, res, next) {
  res.end(`Reading file '${req.params.fileId}'`);
});

/**
 * U - pdate
 */
router.put('/file/:fileId', function(req, res, next) {
  console.log("UPDATE ME HERE" + req.params.fileId)
  console.log(req.body)
  res.end(`Updating file '${req.params.fileId}'`);
});

/**
 * D - elete
 */
router.delete('/file/:fileId', function(req, res, next) {
  res.end(`Deleting file '${req.params.fileId}'`);
});

/**
 * ¯\_(ツ)_/¯ - list
 */
router.get('/file', function(req, res, next) {
  res.end('List all files');
});


  module.exports = router;