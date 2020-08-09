const { people, ages } = require('./people');
const {platform, arch, cpus, homedir, userInfo} = require('os')

console.log(people, ages);
console.log(platform())
console.log(arch())
console.log(cpus())
console.log(homedir())
console.log(userInfo())