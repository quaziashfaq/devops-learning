// load the express module
var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello Hello!! Imran!!!');
});

app.listen(80, () => console.log('Express server started successfully'));

