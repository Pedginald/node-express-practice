const express = require('express');
const app = express();
const logger = require('./logger');

app.use(logger);

app.get('/', (req, res) => {
	return res.send('Home');
})

app.get('/about', (req, res) => {
	return res.send('About');
})

app.listen(5000, () => {
	console.log('Server listening on port 5000...');
})