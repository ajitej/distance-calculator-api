
// Get the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Create Express application
var app = module.exports = express();  
app.use(cors());

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');
app.use(express.static(__dirname));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

var routes = require('./routes/fsRoute');
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);
