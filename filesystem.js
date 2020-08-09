const fs = require('fs');

// Reading files

fs.readFile('./files/text.txt', (err, data) => {
	if (err) console.log(err);
	console.log(data.toString());
});


// Writing files

fs.writeFile('./files/text.txt', 'hello, there!', () => {
	console.log('file was rewritten');
});

fs.writeFile('./files/text2.txt', "it's okay not to be okay.", () => {
	console.log('file was written');
});


// Directories

if (!fs.existsSync('./newfolder')) {
	fs.mkdir('./newfolder', err => {
		if (err) console.log(err);
		console.log('folder created');
	});
} else {
	fs.rmdir('./newfolder', err => {
		if (err) console.log(err);
		console.log('folder deleted');
	});
}

// Deleting Files

if (fs.existsSync('./files/deleteme.txt')) {
	fs.unlink('./files/deleteme.txt', err => {
		if (err) console.log(err);
		console.log('file deleted')
	})
}
