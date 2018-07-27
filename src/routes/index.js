// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');
const Book = require('../models/book.model')
// All handlers below...

  
  router.get('/', function(req, res, next) {
    var rng = Math.floor(Math.random()*quotes.length);
    console.log(`rng`, rng);
   res.json(rng)
  });
  
  // router.get('/deanquotes.html', function(req, res, next) {
  //   var rng = Math.floor(Math.random()*quotes.length);
  //   console.log(`rng`, rng);
  //  res.json(quotes[rng])
  // });

  router.get('/booklist', function(req, res, next) {
    const Book = mongoose.model('Book');

    Book.find({deleted: {$ne: true}}, function(err, allbooks){
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json(allbooks);
    });
    
  });


/******************************************** */



// CREATE
router.post('/book', function(req, res, next) {
  const Book = mongoose.model('Book');
  const bookData = {
    title: req.body.title,
    published: req.body.published,
  };

  Book.create(bookData, function(err, newBook) {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json(newBook);
  });
});


// READ
router.get('/book/:bookId', function(req, res, next) {
  res.end(`Reading book '${req.params.bookId}'`);
});

// UPDATE
router.put('/book/:bookId', function(req, res, next) {
  const Book = mongoose.model('Book');
  const bookId = req.params.bookId;
  
  Book.findById(bookId, function(err, book) {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    if (!book) {
      return res.status(404).json({message: "Book not found"});
    }
  
    book.title = req.body.title;
    book.published = req.body.published;
  
    book.save(function(err, savedBook) {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json(savedBook);
    })
  
  })
  }); 

// DELETE
router.delete('/book/:bookId', function(req, res, next) {
  const Book = mongoose.model('Book');
  const bookId = req.params.bookId;

  Book.findById(bookId, function(err, book) {
    if(err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!book) {
      return res.status(404).json({message: "Book not found"});
    }

    book.deleted = true;

    book.save(function(err, burnedBook) {
      res.json(burnedBook);
    })

  })
});

// LIST
router.get('/book', function(req, res, next) {
  res.end('List all books');
});


  module.exports = router;