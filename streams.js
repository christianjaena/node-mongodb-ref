const fs = require('fs');

const readStream = fs.createReadStream('./files/text3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./files/text4.txt');

// readStream.on('data', chunk => {
// 	console.log('-----NEW CHUNK----');
// 	// w/o passing encoding argument
// 	//	console.log(chunk.toString());
// 	console.log(chunk)
// 	writeStream.write('\nNEW CHUNK\n')
// 	writeStream.write(chunk)
// });

// Piping - read to write
readStream.pipe(writeStream)