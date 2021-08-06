const express = require('express');
const authorize = require('./authorize');
const app = express();
const logger = require('./logger');

app.use([logger, authorize]);

app.get('/', (req, res) => {
	return res.send('Home');
})

app.get('/about', (req, res) => {
	return res.send('About');
})

app.get('/api/products', (req, res) => {
	return res.send('Products');
})

app.get('/api/items', (req, res) => {
	return res.send('Items')
})

app.listen(5000, () => {
	console.log('Server listening on port 5000...');
})