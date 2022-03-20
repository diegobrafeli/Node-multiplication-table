const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        describe: 'It is the base the mutiply table',
        demandOption: true,
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        describe: 'Show the multiply table',
        default: false
    })
    .option('u',{
        alias: 'until',
        type: 'number',
        describe: 'The number of time the base will be multiplied',
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'The base have to be a number'
        }
        return true
    })
    .argv;

module.exports = argv;