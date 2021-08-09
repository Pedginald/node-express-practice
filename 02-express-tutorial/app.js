const express = require('express');
const app = express();
const { people } = require('./data.js');

app.use(express.urlencoded({extended: false}));
app.use(express.static('./methods-public'));

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
})

app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.send(`Welcome ${name}`);
	}
	return res.send('Please provide a name')
})

app.listen(5000, () => {
	console.log('Server listening on port 5000...');
})