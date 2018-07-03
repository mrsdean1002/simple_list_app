const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

// Load mongoose package
const mongoose = require('mongoose');

// Connect to MongoDB and create/use database as configured
mongoose.connection.openUri(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.dbName}`);

// Import all models
require('./models/file.model.js');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicPath));

// All handlers below...

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/title', (req, res) => {         //added app.get('/title', (req, res))
  res.sendFile(__dirname + '/index.html') 
})

app.post('/title', (req, res) => { //changed from '/titles' to '/title'
  console.log(req.body)
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})