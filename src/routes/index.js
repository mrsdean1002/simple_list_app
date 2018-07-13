// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

// All handlers below...

// router.use('/api/doc', function(req, res, next) {
// res.end(`Documentation http://expressjs.com/`);
//  }); 

  
  
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
    res.json([
      {id: 'a', title: 'cutecat1.jpg', published: 'A cute cat'},
      {id: 'b', title: 'uglycat1.jpg', published: 'Just kidding, all cats are cute'},
      {id: 'c', title: 'plaintext_passwords.txt', published: '12345 - like my luggage'},
      {id: 'd', title: 'got_S08E01.mp4', published: 'home video of...a cat'},
    ])
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