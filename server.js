const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// All handlers below...

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/titles', (req, res) => {
  console.log(req.body)
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})