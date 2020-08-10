const express = require('express');
const route = express.Router();
const blogControllers = require('../controllers/blogControllers');
const {
	blog_get_index,
	blog_create_post,
	blog_create_get,
	blog_delete,
	blog_details,
} = blogControllers;

route.get('/', blog_get_index);
route.get('/create', blog_create_get);
route.post('/', blog_create_post);
route.get('/:id', blog_details);
route.delete('/:id', blog_delete);

module.exports = route;
