const express = require('express');
const app = express();
const { people } = require('./data.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./methods-public'));
app.use(express.json());

app.post('/login', (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	if (name) {
		return res.send(`Welcome ${name}`);
	}
	return res.send('Please enter a name');
})

app.get('/api/people', (req, res) => {
	return res.status(200).json({ success: true, data: people });
})

app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: 'Please provide name value'});
	}
	return res.status(201).json({ success: true, person: name});
})

app.post('/api/people/postman', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'Please provide a name value' })
	}
	return res.status(201).json({ success: true, data: [...people, name] })
})


app.put('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find(person => {
		return person.id === Number(id);
	})

	const newPeople = people.map(person => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	})
	return res.status(200).json({ success: true, data: newPeople });
})

app.delete('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const person = people.find(person => {
		return person.id === Number(id);
	})
	const newPeople = people.filter(person => {
		return person.id !== Number(id);
	})
	if (!person) {
		return res.status(400).json({ success: false, msg: `No person with the id ${id}`});
	}
	return res.status(200).json({ success: true, data: newPeople});
})

app.listen(5000, () => {
	console.log('Server listening on port 5000...');
})