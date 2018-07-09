// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

// var quotes = [
//   "I'm not in the best shape, but I want to prove to myself I can do something that seems insurmountable and inspire others by showing them no matter where they are in their fitness goals, they can do it, too. -Ruben Studdard",
//   "Reading is to the mind what exercise is to the body. -Joseph Addison",
//   "A muscle is like a car. If you want it to run well early in the morning, you have to warm it up. -Florence Griffith Joyner",
//   "Take care of your body. It's the only place you have to live. -Jim Rohn",
//   "Set Goals. Stay Quiet About Them. Smash the Shit Out of Them. Clap For Your Damn Self. Repeat.", 
//   "The hardest thing about exercising is to START. Once you’re exercising regularly. The hardest thing to is STOP.",
//   "It Takes 21 Days To Make Or Break A Habit",
//   "I already know what giving up feels like. I want to see what happens If I don’t.",
//   "If you are persistent, You will get it. If you are consistent, You will keep it.",
//   "Commitment means staying loyal to what you said you were going to do long after the mood you said it in has left you.",  
//   ];

// Totally fake data
const FILES = [
  {id: 'a', title: 'cutecat1.jpg', description: 'A cute cat'},
  {id: 'b', title: 'uglycat1.jpg', description: 'Just kidding, all cats are cute'},
  {id: 'c', title: 'plaintext_passwords.txt', description: '12345 - like my luggage'},
  {id: 'd', title: 'got_S08E01.mp4', description: 'home video of...a cat'},
];
  
// All handlers below...

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

router.get('/title', (req, res) => {         //added app.get('/title', (req, res))
  res.sendFile(__dirname + '/index.html') 
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
  const { fileId } = req.params;
  // same as 'const fileId = req.params.fileId'

  const file = FILES.find(entry => entry.id === fileId);
  if (!file) {
    return res.status(404).end(`Could not find file '${fileId}'`);
  }

  res.json(file);
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
  res.json(FILES);
});

module.exports = router;