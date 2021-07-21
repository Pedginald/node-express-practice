const http = require('http');

const server = http.createServer((req, res) => {
	// console.log(req.method);
	const url = req.url;
	// Homepage
	if (url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' })
		res.write('<h1>Homepage</h1>')
		res.end()
		// About page
	} else if (url === '/about') {
		res.writeHead(200, { 'content-typ': 'text/htm' })
		res.write('<h1>About</h1>')
		res.end()
		// Invalid page url
	} else {
		res.writeHead(404, { 'content-type': 'text/html' })
		res.write('<h1>Page not found</h1>')
		res.end()
	}
})

server.listen(5000);