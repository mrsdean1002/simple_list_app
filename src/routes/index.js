// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

// All handlers below...

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
  
  router.get('/title', (req, res) => {         //added app.get('/title', (req, res))
    res.sendFile(__dirname + '/public/index.html') 
  })
  
  router.post('/title', (req, res) => { //changed from '/titles' to '/title'
    console.log(req.body)
  })
  
  
  router.get('/', function(req, res, next) {
    var rng = Math.floor(Math.random()*quotes.length);
    console.log(`rng`, rng);
   res.json(rng)
  });
  
  router.get('/quotes', function(req, res, next) {
    var rng = Math.floor(Math.random()*quotes.length);
    console.log(`rng`, rng);
   res.json(quotes[rng])
  });