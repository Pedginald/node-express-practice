const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	if (name) {
		return res.send(`Welcome ${name}`);
	}
	return res.send('Please enter a name');
})

module.exports = router;