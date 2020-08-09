const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req.url, req.method);
	// req.url - '/', '/about'
	// req.method - GET, POST, UPDATE, DELETE

	// Response object
	// Plain Text
	// res.setHeader('Content-Type', 'text/plain');
	// res.write('hello, world!');

	// HTML (inline)
	// res.setHeader('content-type', 'text/html')
	// res.write('<head><link rel="stylesheet" src="#"/></head>')
	// res.write('<h1>Hello World</h1>')
	// res.end();

	// Sending HTML
	res.setHeader('Content-Type', 'text/html');

	let path = './files/';
	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			// good for multiple send
			// res.write(data);

			// since response is only once, it's good to use this.
			res.end(data);
		}
	});
});

server.listen(3000, 'localhost', () => {
	console.log('server listening on port 3000');
});
