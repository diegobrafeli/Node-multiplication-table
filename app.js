
const {toCreateTable} = require('./helpers/multiplySimple')
const argv = require('./config/yargs')
require('colors')

console.clear();

//console.log(argv);

toCreateTable(argv.b, argv.u, argv.l)
    .then(nameFile => console.log(nameFile.rainbow, 'created'.rainbow.inverse))
    .catch( err => console.log(err))
