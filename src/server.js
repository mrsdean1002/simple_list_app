const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');

// Load mongoose package
const mongoose = require('mongoose');

// Connect to MongoDB and create/use database as configured
mongoose.connection.openUri(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.dbName}`);

// Import all models
require('./models/file.model.js');

const app = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));
app.use('/api', router);
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, function(){
  console.log('listening on port 3000')
})