// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

// Totally fake data
const FILES = [
  {id: 'a', title: 'cutecat1.jpg', description: 'A cute cat'},
  {id: 'b', title: 'uglycat1.jpg', description: 'Just kidding, all cats are cute'},
  {id: 'c', title: 'plaintext_passwords.txt', description: '12345 - like my luggage'},
  {id: 'd', title: 'got_S08E01.mp4', description: 'home video of...a cat'},
];

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

    mongoose.model('File').find({}, function(err, files) {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      
        res.json(files);
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
  })
});