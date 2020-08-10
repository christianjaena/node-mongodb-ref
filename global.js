setTimeout(() => {
	console.log('STOP')
	clearInterval(interval)
}, 5000)

let counter = 0

const interval = setInterval(() => {
	console.log(++counter)
}, 1000)
