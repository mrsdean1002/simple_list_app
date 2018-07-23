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

  router.get('/booklist', function(req, res, next) {
    const File = mongoose.model('File');

    Book.find({deleted: {$ne: true}}, function(err, allbooks){
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json(allbooks);
    });
    
  });


/******************************************** */



  /**
 * C - reate
 */
router.post('/file', function(req, res, next) {
  const File = mongoose.model('File');
  const fileData = {
    title: req.body.title,
    published: req.body.published,
  };

  File.create(fileData, function(err, newFile) {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json(newFile);
  });
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
  const File = mongoose.model('File');
  const fileId = req.params.fileId;
  
  File.findById(fileId, function(err, file) {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }
  
    file.title = req.body.title;
    file.published = req.body.published;
  
    file.save(function(err, savedFile) {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json(savedFile);
    })
  
  })
  }); 

/**
 * D - elete
 */
router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if(err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});

/**
 * ¯\_(ツ)_/¯ - list
 */
router.get('/file', function(req, res, next) {
  res.end('List all files');
});


  module.exports = router;