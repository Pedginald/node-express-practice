const express = require('express');
const app = express();
const logger = require('./logger');

app.get('/', logger, (req, res) => {
	return res.send('Home');
})

app.get('/about', logger, (req, res) => {
	return res.send('About');
})

app.listen(5000, () => {
	console.log('Server listening on port 5000...');
})