const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = require('./mongodbURI');
const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();

// mongodb uri
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => {
		// ? listen to server in port 3000
		// * listen to requests only after db connection
		console.log('connected to db');
		app.listen(3000);
	})
	.catch(err => console.log(err));
// register view engine
app.set('view engine', 'ejs');

// for new folder name
// app.set('views', 'myviews');

app.use(morgan('dev'));

// url encoded
app.use(express.urlencoded({ extended: true }));

// ? STATIC FILES
app.use(express.static('public'));
// * CUSTOM MIDDLEWARE
// app.use((req, res, next) => {
// 	console.log('new request made:');
// 	console.log('host: ', req.hostname);
// 	console.log('path: ', req.path);
// 	console.log('method: ', req.method);
// ? INVOKE next() IF THERE'S NOT RESPONSE METHOD IN THE MIDDLEWARE TO PROCEED
// 	next();
// });

// app.use((req, res, next) => {
// 	console.log('inside next middleware');
// 	next();
// });

// ? MONGOOSE ROUTE SANDBOX

// app.get('/add-blog', (req, res) => {
// 	const blog = new Blog({
// 		title: 'A new Blog 2',
// 		snippet: 'this is a new blog',
// 		body: 'this is the body of the new blog',
// 	});

// 	blog
// 		.save()
// 		.then(result => res.send(result))
// 		.catch(err => console.log(err));
// });

// app.get('/all-blogs', (req, res) => {
// 	Blog.find()
// 		.then(results => res.send(results))
// 		.catch(err => console.log(err));
// });

// app.get('/single-blog', (req, res) => {
// 	Blog.findById('5f2e2ab5f1e2ad1da8d416d2')
// 		.then(result => res.send(result))
// 		.catch(err => console.log(err));
// });

// ? ROUTES MVC
app.use('/blogs/', blogRoutes);

// routes
app.get('/', (req, res) => {
	// * res.sendFile('./files/index.html', { root: __dirname });

	// * use render() for view engines
	// * automatically finds the name of the file w/o extension name in the default folder('views')

	// mock data from database
	// const blogs = [
	// 	{
	// 		title: "Psycho but It's okay",
	// 		snippet: 'Munyeong, Gangtae, Sangtae',
	// 	},
	// 	{
	// 		title: 'Crash Landing on You',
	// 		snippet: 'Seri, Captain Ri, Dan',
	// 	},
	// 	{
	// 		title: 'Red Velvet',
	// 		snippet: 'Wendy, Seulgi, Irene, Yeri, Joy',
	// 	},
	// ];
	// res.render('index', { title: 'Home', blogs });

	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	// res.sendFile('./files/about.html', { root: __dirname });
	res.render('about', { title: 'About' });
});

// redirect
// app.get('/about-us', (req, res) => {
// 	res.redirect('/about');
// });

// default case
app.use((req, res) => {
	res.status(404).render('404', { title: 'Error 404' });
});
